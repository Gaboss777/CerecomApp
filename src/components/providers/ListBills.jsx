import React, { Fragment, useState, useEffect } from 'react';
import { Tab, Table, Tabs } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getBills, getProviders } from '../../ducks/provider';
import PaymentForm from './PaymentForm';

const ListBills = ({bills, getProviders, getBills, providers, year }) => {

    useEffect(() => {
        getProviders()
        getBills()
    }, [])

    const months = [{ id: '01', name: 'enero' }, { id: '02', name: 'febrero' }, { id: '03', name: 'marzo' }, { id: '04', name: 'abril' }, { id: '05', name: 'mayo' }, { id: '06', name: 'junio' }, { id: '07', name: 'julio' }, { id: '08', name: 'agosto' }, { id: '09', name: 'septiembre' }, { id: '10', name: 'octubre' }, { id: '11', name: 'noviembre' }, { id: '12', name: 'diciembre' }]
    const initialMonth = months[0]
    const [key, setKey] = useState(initialMonth.id)

    console.log(bills)
    console.log(providers)

    return (
    <Fragment>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className='nav-fill tab-payment border-bottom border-dark'>
            {months.map(month => 
                <Tab eventKey={month.id} title={month.name} >
                <PaymentForm isModal={true} month={month} />
                    <Table className='mt-2'>
                        <thead className='bg-warning text-white'>
                            <tr>
                                <th>FECHA</th>
                                <th>PROVEEDOR</th>
                                <th># FACTURA</th>
                                <th>MONTO</th>
                                <th>MONEDA</th>
                                <th>METODO</th>
                                <th>COMENTARIO</th>
                            </tr>
                        </thead>
                        <tbody>
                        {bills.length > 0 ?
                        <>
                            { bills.filter(x=>x.period === month.id+'-'+year).map(bill => 
                            {
                                let providerName = providers.filter(x => x.id == bill.provider_id).map(x => {return x.name})
                                console.log(providerName)
                                console.log(bill)
                                return (
                                <tr>
                                    <td>{bill.date}</td>
                                    <td>{providerName}</td>
                                    <td>{bill.billnumber}</td>
                                    <td>{bill.amount}</td>
                                    <td>{bill.currency}</td>
                                    <td>{bill.method}</td>
                                    <td>{bill.comment}</td>
                                </tr>
                                )}
                            )}
                        </>
                            : <tr><td colSpan={6} className='text-center'>NO HAY PAGOS REGISTRADOS</td></tr>
                        }
                        </tbody>
                    </Table>
                </Tab>
            )}
        </Tabs>
    </Fragment>
    )
}

const MSTP = state => (
    {
        bills: state.providers.bills,
        providers: state.providers.providers,
        year: state.dates.year
    }
)

const MDTP = dispatch => (
    {
        getProviders:() => dispatch(getProviders()),
        getBills:() => dispatch(getBills())
    }
)

export default connect(MSTP, MDTP)(ListBills)
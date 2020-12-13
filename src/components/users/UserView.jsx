import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Badge, Button, Modal, Col, Container, Row, Card } from 'react-bootstrap';


const UserInfo = ({ user, selection }) => {

    const [showModal, setShowModal] = useState(false);

    return(
        <Fragment>
            <Button disabled={selection.length !== 1 ? true : false} variant='dark' onClick={() => setShowModal(true)}><FontAwesomeIcon icon={faInfoCircle} size='lg' /></Button>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered size='lg'  >
            { user &&
            <Fragment>
                <Modal.Header closeButton className='bg-dark' >
                    <Modal.Title className='text-white text-center w-100'>INFORMACION</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid >
                        <Row>
                            <Col sm lg={7} >
                                <Row>
                                    <Col sm lg={12} className='pl-0' >
                                        <h4 className='bg-warning py-2 text-center text-white'>DATOS DEL CLIENTE</h4>
                                    </Col>
                                    <Col sm lg={9} className='pl-0'>
                                        <p className='bg-dark border border-dark text-white pl-1 '>RAZON SOCIAL</p>
                                        <p className='font-weight-bold pl-2' >{user.name}</p>
                                    </Col>
                                    <Col sm lg={3} className='pl-0' >
                                        <p className='bg-dark border border-dark mb-0 text-white text-center'>STATUS</p>
                                        <p className={`bg-${user.status === 'Activo' ? 'success' : user.status === 'Suspendido' ? 'warning' : 'danger'} text-center text-white py-2`}>{user.status}</p>
                                    </Col>
                                    <Col sm lg={4} className='mt-2 pl-0'>
                                        <p className='bg-dark border border-dark text-white pl-1 '>CEDULA/RIF</p>
                                        <p className='font-weight-bold pl-2' >{user.document}</p>
                                    </Col>
                                    <Col sm lg={8} className='mt-2'>
                                        <p className='bg-dark border border-dark text-white pl-1'>DIRECCION</p>
                                        <p className='font-weight-bold pl-2' >{user.location ? user.location : 'N/A'}</p>
                                    </Col>
                                    <Col sm lg={7} className='mt-2 pl-0'>
                                        <p className='bg-dark border border-dark text-white pl-1 '>EMAIL</p>
                                        <p className='font-weight-bold pl-2' >{user.email ? user.email : 'N/A'}</p>
                                    </Col>
                                    <Col sm lg={5} className='mt-2'>
                                        <p className='bg-dark border border-dark text-white pl-1'>TELEFONO</p>
                                        <p className='font-weight-bold pl-2' >{user.phone ? user.phone : 'N/A'}</p>
                                    </Col>
                                    <Col sm lg={6} className='mt-2 pl-0'>
                                        <p className='bg-dark border border-dark text-white pl-1 '>INICIO</p>
                                        <p className='font-weight-bold pl-2' >{user.initialdate ? user.initialdate : 'YYYY-MM-DD'}</p>
                                    </Col>
                                    <Col sm lg={6} className='mt-2'>
                                        <p className='bg-dark border border-dark text-white pl-1'>CANCELACION</p>
                                        <p className='font-weight-bold pl-2' >{user.lastdate ? user.lastdate : 'YYYY-MM-DD'}</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm lg={5} className='pr-0' >
                                <Row>
                                    <Col sm lg={12} className='pl-0' >
                                        <h4 className='bg-warning py-2 text-center text-white'>PLAN ACTUAL</h4>
                                    </Col>
                                    <Col sm lg={7} className='pl-0'>
                                        <p className='bg-dark border border-dark text-white pl-1'>PLAN</p>
                                        <p className='font-weight-bold pl-2'>{user.service}</p>
                                    </Col>
                                    <Col sm lg={5}>
                                        <p className='bg-dark border border-dark text-white pl-1 mb-0'>Bandwidth</p>
                                        <h3 className='text-center py-2 mb-0 text-white bg-warning'>{user.bandwidth ? user.bandwidth : 'N/A'}</h3>
                                    </Col>
                                    <Col sm lg={6} className='mt-2 pl-0'>
                                        <p className='bg-dark border border-dark text-white pl-1 '>DIRECCION IP</p>
                                        <p className='font-weight-bold pl-2'>{user.ip ? user.ip : 'N/A'}</p>
                                    </Col>
                                    <Col sm lg={6} className='mt-2'>
                                        <p className='bg-dark border border-dark text-white pl-1 '>DIRECCION MAC</p>
                                        <p className='font-weight-bold pl-2'>{user.mac ? user.mac : 'N/A'}</p>
                                    </Col>
                                    <Col sm lg={6} className='mt-2 pl-0'>
                                        <p className='bg-dark border border-dark text-white pl-1 '>MENSUALIDAD</p>
                                        <p className='font-weight-bold pl-2'>{user.mensuality}</p>
                                    </Col>
                                    <Col sm lg={6} className='mt-2'>
                                        <p className='bg-dark border border-dark text-white pl-1 '>SERIAL</p>
                                        <p className='font-weight-bold pl-2'>{user.serial ? user.serial : 'N/A'}</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Fragment>
            }
            </Modal>
        </Fragment>
    )
}

const MSTP = state => (
    {
        user: state.users.selected[0],
        selection: state.users.selected
    }
)

export default connect(MSTP, null)(UserInfo)
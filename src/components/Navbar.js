import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../img/LOGO.png';
import { Link } from 'react-router-dom';

const MainMenu =()=> {
    return(
    <Navbar expand="lg" bg='white' className='mb-3 py-1' >
        <Navbar.Brand href="#home">
            <img src={Logo} alt='Logo' />
        </Navbar.Brand>
        <Nav >
            <Nav.Link as={Link} to='/' className='nav-link-menu p-2 mx-1 navbar-hover-effect' >INICIO</Nav.Link>
            <Nav.Link as={Link} to='/users' className='nav-link-menu p-2 mx-1 navbar-hover-effect' >CLIENTES</Nav.Link>
            <Nav.Link as={Link} to='/payment' className='nav-link-menu p-2 mx-1 navbar-hover-effect' >PAGOS</Nav.Link>
        </Nav>
    </Navbar>
    )
}

export default MainMenu
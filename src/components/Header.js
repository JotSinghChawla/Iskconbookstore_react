import React from 'react'
import { Navbar, Nav, NavItem,Button, Container  }  from 'react-bootstrap'

const navbarStyle ={
  backgroundColor: '#fada5e',
  fontWeight: 'bold',
  fontSize: '18px'
}

const Header = () => {
    return (
        <Navbar style={navbarStyle}collapseOnSelect expand="lg" fixed='top' variant="light">
            <Navbar.Brand href="#home"> 
              <img src={process.env.PUBLIC_URL + '/assets/images/demo.png'} height='35' width='35' className='d-inline-block align-top'
              alt='Iskcon' /> ISKCON 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar' />
            <Navbar.Collapse id='responsive-navbar'>
              <Nav className='mr-auto'>
                <Nav.Link href='#'>Home</Nav.Link>
                <Nav.Link href='#'>Bookstore</Nav.Link>
                <Nav.Link href='https://www.iskcon.org/about-us/what-is-iskcon.php'>About us</Nav.Link>
                <Nav.Link href='https://centres.iskcon.org/'>Contact us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header

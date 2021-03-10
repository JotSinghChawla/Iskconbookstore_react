import { React, useState } from 'react'
import { MDBNavbar, MDBCollapse, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler } from 'mdbreact'
import SocialIcons from './SocialIcons'

const navbarStyle ={
  backgroundColor: '#fada5e',
  fontWeight: 'bold',
  fontSize: '18px',
  color: '#584E4A',
  padding: '5px 10px',
  boxShadow: '0px 4px 16px 0px rgb(119 119 119 / 50%)',
}

const Header = () => {

const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <MDBNavbar style={navbarStyle} color='dark' expand="md" fixed='top'>
          <div className='container-fluid'>
            <MDBNavbarBrand href="#home"> 
              <img src={process.env.PUBLIC_URL + '/assets/images/demo.png'} height='45' width='45' className='d-inline-block'
              alt="ISKCON - The Hare Krishna Movement" /> <strong> ISKCON </strong> 
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={ () => setNavbarOpen(true) } />
            <MDBCollapse id='navbarCollapse' isOpen={navbarOpen} navbar >
              <MDBNavbarNav className='ml-auto mr-auto'>

                <MDBNavItem active>
                  <MDBNavLink to="#">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Bookstore</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="https://www.iskcon.org/about-us/what-is-iskcon.php">About us</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="https://centres.iskcon.org/">Contact us</MDBNavLink>
                </MDBNavItem>

              </MDBNavbarNav>
            </MDBCollapse>
            <SocialIcons />
          </div>
        </MDBNavbar>
    )
}

export default Header

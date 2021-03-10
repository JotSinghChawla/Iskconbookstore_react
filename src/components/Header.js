import { React, useState } from 'react'
import { MDBNavbar, MDBCollapse, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler } from 'mdbreact'
import SocialIcons from './SocialIcons'

const navbarStyle = { 
  backgroundColor: '#fada5e',
  fontWeight: 'normal',
  fontSize: '18px',
  color: '#584E4A',
  padding: '5px 10px',
  boxShadow: '0px 4px 16px 0px rgb(119 119 119 / 50%)',
}
const menu = {
  flexGrow: '0.2'
}

const Header = () => {

const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <MDBNavbar style={navbarStyle} light expand="md" fixed='top'>
          <div className='container-fluid'>
            <MDBNavbarBrand href="/home"> 
              <img src={process.env.PUBLIC_URL + '/assets/images/demo.png'} height='45' width='45' className='d-inline-block'
              alt="ISKCON - The Hare Krishna Movement" /> <strong> ISKCON </strong> 
            </MDBNavbarBrand>
            <MDBCollapse style={menu} isOpen={navbarOpen} navbar >
              
              <MDBNavbarNav className='ml-auto mr-auto'>
                <MDBNavItem active>
                  <MDBNavLink to="./home">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/bookstore">Bookstore</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/aboutus">About Us</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/contactus">Contact us</MDBNavLink>
                </MDBNavItem>

              </MDBNavbarNav>
            </MDBCollapse>
            <SocialIcons />
            <MDBNavbarToggler onClick={ () => setNavbarOpen(!navbarOpen) } />
          </div>
        </MDBNavbar>
    )
}

export default Header

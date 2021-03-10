import React from 'react'
import { MDBNav, MDBNavItem, MDBNavLink }  from 'mdbreact'
import { FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa'
import styles from '../shared/socialIcons.module.css'

const SocialIcons = () => {
    return (
        <MDBNav>
            <MDBNavItem>
                <MDBNavLink className={styles.navLinkPadding} to='/facebook' target='_blank'>
                    <FaFacebookF className={styles.social + ' ' +styles.facebook} />
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink className={styles.navLinkPadding} to='/twitter' target='_blank'>
                    <FaTwitter className={styles.social + ' ' + styles.twitter}  />
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink className={styles.navLinkPadding} to='/youtube' target='_blank'>
                    <FaYoutube className={styles.social + ' ' +styles.youtube}  />
                </MDBNavLink>
            </MDBNavItem>  
        </MDBNav> 
    )
}

export default SocialIcons

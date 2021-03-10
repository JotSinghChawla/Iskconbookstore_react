import React from 'react'
import { MDBNav, MDBNavItem, MDBNavLink }  from 'mdbreact'
import { FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa'
import styles from '../shared/socialIcons.module.css'

const SocialIcons = () => {
    return (
        <MDBNav>
            <MDBNavItem>
                <MDBNavLink to='chart' to='https://www.facebook.com/iskconglobal' >
                    <FaFacebookF className={styles.social + ' ' +styles.facebook} />
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to='https://twitter.com/india_iskcon' target='_blank'>
                    <FaTwitter className={styles.social + ' ' + styles.twitter}  />
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to='https://www.youtube.com/channel/UCnQ0YFFLezzd5TEx4j8Dfzw'>
                    <FaYoutube className={styles.social + ' ' +styles.youtube}  />
                </MDBNavLink>
            </MDBNavItem>  
        </MDBNav> 
    )
}

export default SocialIcons

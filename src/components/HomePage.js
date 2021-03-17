import React, { Component } from 'react'
import { MDBAnimation, MDBIcon } from 'mdbreact'
import { Link } from 'react-router-dom'
import styles from '../shared/homePage.module.css'

export class HomePage extends Component {
    render() {
        return (
            <>
            <div className={styles.mainImage}>
                <div className={styles.imageText}>
                        <h1 style={{ fontSize: '50px' }}> ISKCON - The Hare Krishna Movement </h1>
                        <h3 className={ 'd-none d-sm-inline ' + styles.italicMain }>ananyas cintayanto mam ye janah paryupasate <br />
                            tesam nityabhiyuktanam yoga-ksemam vahamy aham <br />
                        </h3>
                    <div style={{ marginTop: '60px'}}> 
                        <MDBAnimation type="fadeInDown" duration="1.5s" infinite>   
                            <a href="#reference">       {/* Redirects to home */}    
                                <MDBIcon icon="angle-double-down" className="amber-text mt-3" size="3x" />
                            </a>
                        </MDBAnimation>
                        </div>
                </div>
            </div>
            <div id='reference'>
                <h1>HELLO WORLD</h1>
            </div>
            </>
        )
    }
}

export default HomePage

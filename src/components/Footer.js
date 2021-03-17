import React from 'react'
import styles from '../shared/footer.module.css'
import SocialIcons from './SocialIcons'

const Footer = () => {
    return (
        <div>
            <div className={styles.footer + ' text-center'}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <h4 className={styles.iskconFooter + " text-uppercase text-left"}>ISKCON.</h4>
                        <p className={styles.italic+" text-left"}>The International Society for Krishna Consciousness (ISKCON), otherwise known as the Hare Krishna movement
                            belongs to the Gaudiya-Vaishnava sampradāya, a monotheistic tradition within the Vedic or Hindu culture.
                            <span className="d-none d-sm-inline"> Philosophically it 
                            is based on the Sanskrit texts Bhagavad-gītā and the Bhagavat Purana, or Srimad Bhagavatam. These are the historic texts of 
                            the devotional bhakti yoga tradition, which teaches that the </span>
                            Ultimate goal for all living beings is to reawaken their love for God, or Lord Krishna, the “all-attractive one”. 
                        </p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h4 className={styles.followFooter + " text-uppercase d-none d-md-block"}>Follow us</h4>
                        <div className={styles.footerSocial}>
                            <SocialIcons />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <strong className="text-muted ">
                    <a href="https://www.iskcon.org/">Iskcon.org </a>
                    © 2020. All Rights Reserved. Site Powered by:
                    <a className={styles.italic} href="https://github.com/JotSinghChawla"> Jot Singh</a>
                </strong>
            </div>
        </div>
            
        </div>
    )
}

export default Footer

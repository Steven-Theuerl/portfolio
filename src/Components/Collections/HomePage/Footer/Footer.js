import React from 'react'
import styles from '../Footer/Footer.module.css'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.entireFooter}>
        <div className={styles.footerContainer}>
            <div className={styles.footerTopBox}>
                <h4 className={styles.footerName}>
                    Steven Theuerl
                </h4>
                <div className={styles.footerLinks}>
                    <div className={styles.footerInPageLinks}>
                      <Link to='/' reloadDocument>
                        <div className={styles.footerInPageLink}>
                            Home
                        </div>
                      </Link>
                      <Link to='/Work-Portfolio' reloadDocument>
                        <div className={styles.footerInPageLink}>
                            Work
                        </div>
                      </Link>
                    </div>
                    <div className={styles.footerExternalLinks}>
                        <div className={styles.footerExternalLinksItem}>
                        <a className={styles.footerAnchor} href='https://www.linkedin.com/in/steven-theuerl-919175209/'>LinkedIn</a><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.64645 10.6464C2.45118 10.8417 2.45118 11.1583 2.64645 11.3536C2.84171 11.5488 3.15829 11.5488 3.35355 11.3536L2.64645 10.6464ZM11.5 3C11.5 2.72386 11.2761 2.5 11 2.5L6.5 2.5C6.22386 2.5 6 2.72386 6 3C6 3.27614 6.22386 3.5 6.5 3.5L10.5 3.5L10.5 7.5C10.5 7.77614 10.7239 8 11 8C11.2761 8 11.5 7.77614 11.5 7.5L11.5 3ZM3.35355 11.3536L11.3536 3.35355L10.6464 2.64645L2.64645 10.6464L3.35355 11.3536Z" fill="white"/>
                        </svg>
                        </div>
                        <div className={styles.footerExternalLinksItem}>
                        <a className={styles.footerAnchor} href='https://github.com/Steven-Theuerl'>Github</a><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.64645 10.6464C2.45118 10.8417 2.45118 11.1583 2.64645 11.3536C2.84171 11.5488 3.15829 11.5488 3.35355 11.3536L2.64645 10.6464ZM11.5 3C11.5 2.72386 11.2761 2.5 11 2.5L6.5 2.5C6.22386 2.5 6 2.72386 6 3C6 3.27614 6.22386 3.5 6.5 3.5L10.5 3.5L10.5 7.5C10.5 7.77614 10.7239 8 11 8C11.2761 8 11.5 7.77614 11.5 7.5L11.5 3ZM3.35355 11.3536L11.3536 3.35355L10.6464 2.64645L2.64645 10.6464L3.35355 11.3536Z" fill="white"/>
                        </svg>
                        </div>
                        <div className={styles.footerExternalLinksItem}>
                        <a className={styles.footerAnchor} href='https://www.linkedin.com/in/steven-theuerl-919175209/'>Resume</a><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.64645 10.6464C2.45118 10.8417 2.45118 11.1583 2.64645 11.3536C2.84171 11.5488 3.15829 11.5488 3.35355 11.3536L2.64645 10.6464ZM11.5 3C11.5 2.72386 11.2761 2.5 11 2.5L6.5 2.5C6.22386 2.5 6 2.72386 6 3C6 3.27614 6.22386 3.5 6.5 3.5L10.5 3.5L10.5 7.5C10.5 7.77614 10.7239 8 11 8C11.2761 8 11.5 7.77614 11.5 7.5L11.5 3ZM3.35355 11.3536L11.3536 3.35355L10.6464 2.64645L2.64645 10.6464L3.35355 11.3536Z" fill="white"/>
                        </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.separator}/>
            <p className={styles.footerFooter}>
                ©2024 Steven Theuerl
            </p>
        </div>
    </div>
  )
}

export default Footer
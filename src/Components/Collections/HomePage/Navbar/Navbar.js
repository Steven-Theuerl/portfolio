import React from 'react'
import { useState } from 'react'
import styles from '../Navbar/Navbar.module.css'
import { Link } from 'react-router-dom'
import HomeGroup from '../../../Groups/HomeGroup'
import WorkGroup from '../../../Groups/WorkGroup'
import ContactGroup from '../../../Groups/ContactGroup'

const Navbar = () => {

    const [nav,setNav] = useState(false);

  return (
    <div className={styles.navAndMenu}>
        <nav className={styles.entireNavbar}>
            <div className={styles.navContainer}>
                <Link to='/' reloadDocument>
                    <div className={styles.navSignature}>
                        Steven Theuerl
                    </div>
                </Link>
                <div className={styles.navULContainer}>
                <div className={styles.navMenuContainer}
                    onClick={() => setNav(!nav)}>
                        {nav ? <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.22189" y1="16.1464" x2="16.0711" y2="1.2972" stroke="#585536"/>
                        <line x1="1.92899" y1="1.14645" x2="16.7782" y2="15.9957" stroke="#585536"/>
                        </svg> : <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.5H18" stroke="#585536"/>
                        <path d="M0 5.5H18" stroke="#585536"/>
                        <path d="M0 10.5H18" stroke="#585536"/>
                        <path d="M0 15.5H9" stroke="#585536"/>
                        </svg>}
                    </div>
                    <ul className={styles.navUL}>
                        <Link to='/' reloadDocument>
                            <li className={styles.navULliItem}>Home</li>
                        </Link>
                        <Link to='/Work1' reloadDocument>
                            <li className={styles.navULliItem}>Works</li>
                        </Link>
                        <Link to='/Contact' reloadDocument>
                            <li className={styles.navULliItem}>
                                <button className={styles.navULliItemTalkBox}>Talk with me</button>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
        <div className={nav ? [styles.slideMenuActive] : [styles.slideMenuInactive]}>
          <div className={styles.slideMenuContainer}>
                <div className={styles.slideMenuTopBox}>
                    <Link to='/' reloadDocument>
                        <li className={styles.navULliItem}>Home</li>
                    </Link>
                    <Link to='/Work1' reloadDocument>
                        <li className={styles.navULliItem}>Work</li>
                    </Link>
                    <Link to='/Contact' reloadDocument>
                        <button className={styles.navULliItemTalkBox}>Talk with me</button>
                    </Link>
                </div>
                <div className={styles.slideMenuBottomBox}>
                    <div className={styles.slideMenuExternalLinks}>
                    <div>
                        <a className={styles.slideMenuAnchor} href='https://www.linkedin.com/in/steven-theuerl-919175209/'>LinkedIn<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.14645 10.6464C2.95118 10.8417 2.95118 11.1583 3.14645 11.3536C3.34171 11.5488 3.65829 11.5488 3.85355 11.3536L3.14645 10.6464ZM12 3C12 2.72386 11.7761 2.5 11.5 2.5L7 2.5C6.72386 2.5 6.5 2.72386 6.5 3C6.5 3.27614 6.72386 3.5 7 3.5L11 3.5L11 7.5C11 7.77614 11.2239 8 11.5 8C11.7761 8 12 7.77614 12 7.5L12 3ZM3.85355 11.3536L11.8536 3.35355L11.1464 2.64645L3.14645 10.6464L3.85355 11.3536Z" fill="green"/>
                        </svg></a>
                    </div>
                    <div>
                        <a className={styles.slideMenuAnchor} href='https://github.com/Steven-Theuerl'>Github<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.14645 10.6464C2.95118 10.8417 2.95118 11.1583 3.14645 11.3536C3.34171 11.5488 3.65829 11.5488 3.85355 11.3536L3.14645 10.6464ZM12 3C12 2.72386 11.7761 2.5 11.5 2.5L7 2.5C6.72386 2.5 6.5 2.72386 6.5 3C6.5 3.27614 6.72386 3.5 7 3.5L11 3.5L11 7.5C11 7.77614 11.2239 8 11.5 8C11.7761 8 12 7.77614 12 7.5L12 3ZM3.85355 11.3536L11.8536 3.35355L11.1464 2.64645L3.14645 10.6464L3.85355 11.3536Z" fill="green"/>
                        </svg></a>
                    </div>
                    <div>
                        <a className={styles.slideMenuAnchor}>Resume<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.14645 10.6464C2.95118 10.8417 2.95118 11.1583 3.14645 11.3536C3.34171 11.5488 3.65829 11.5488 3.85355 11.3536L3.14645 10.6464ZM12 3C12 2.72386 11.7761 2.5 11.5 2.5L7 2.5C6.72386 2.5 6.5 2.72386 6.5 3C6.5 3.27614 6.72386 3.5 7 3.5L11 3.5L11 7.5C11 7.77614 11.2239 8 11.5 8C11.7761 8 12 7.77614 12 7.5L12 3ZM3.85355 11.3536L11.8536 3.35355L11.1464 2.64645L3.14645 10.6464L3.85355 11.3536Z" fill="green"/>
                        </svg></a>
                    </div>
                    </div>
                    <div className={styles.footerFooter}>
                    ©2024 Steven Theuerl
                    </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar
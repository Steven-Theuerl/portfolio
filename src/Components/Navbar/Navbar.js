import React from 'react'
import { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {


  return (
    <div className={styles.entireNavbar}>
        <div className={styles.navContainer}>
            <div className={styles.navSignature}>
                Steven Theuerl
            </div>
            <div className={styles.navULContainer}>
            <div className={styles.navMenuContainer}>
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.5H18" stroke="#585536"/>
                    <path d="M0 5.5H18" stroke="#585536"/>
                    <path d="M0 10.5H18" stroke="#585536"/>
                    <path d="M0 15.5H9" stroke="#585536"/>
                    </svg>
                </div>
                <ul className={styles.navUL}>
                    <li className={styles.navULliItem}>About</li>
                    <li className={styles.navULliItem}>Work</li>
                    <li className={styles.navULliItem}>
                        <button className={styles.navULliItemTalkBox}>Talk with me</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
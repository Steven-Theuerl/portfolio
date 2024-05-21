import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.entireNavbar}>
        <div className={styles.navContainer}>
            <div className={styles.navSignature}>
                Steven Theuerl
            </div>
            <div className={styles.navULContainer}>
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
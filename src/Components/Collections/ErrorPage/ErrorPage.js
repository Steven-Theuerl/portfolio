import React from 'react'
import styles from './ErrorPage.module.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
        <div className={styles.entireErrorContainer}>
            <div className={styles.errorContentContainer}>
                <h1 className={styles.errorPageHeader}>404</h1>
                <div className={styles.errorPageMessage}>
                    <h2 className={styles.errorPageOopsie}>Oops!</h2><br/>
                    <p>The page you are looking for can't be found!</p>
                </div>
                <div className={styles.errorImageContainer}>
                    <div className={styles.errorImage}/>
                </div>
                <div className={styles.errorPageReturnButtonContainer}>
                    <Link to='/'>
                        <button className={styles.errorPageReturnButton}>
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default ErrorPage
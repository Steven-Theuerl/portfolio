import React from 'react'

import styles from '../Experience/Experience.module.css'

const Experience = () => {

  return (
    <div className={styles.entireExp}>
        <div className={styles.expContainer}>
            <div className={styles.profExp}>
                <h1 className={styles.profExpHeader}>
                    Experience
                </h1>
                <div className={styles.profExpItems}>
                    <div className={styles.profExpItem}>
                        <div className={styles.profExpItemImgContainer1}>
                            <div className={styles.profExpItemImg1}/>
                        </div>
                        <div className={styles.profExpText}>
                            <h2 className={styles.profExpTitle}>
                                <span>Cultivation Supervisor at <b>Goodblend</b></span>
                            </h2>
                            <h3 className={styles.profExpDates}>
                                January 2022 - November 2023
                            </h3>
                        </div>
                    </div>
                </div>
                <div className={styles.profExpItems}>
                    <div className={styles.profExpItem}>
                        <div className={styles.profExpItemImgContainer2}>
                            <div className={styles.profExpItemImg2}/>
                        </div>
                        <div className={styles.profExpText}>
                            <h2 className={styles.profExpTitle}>
                                <span>Supervisor <b>IBEX Global</b></span>
                            </h2>
                            <h3 className={styles.profExpDates}>
                                November 2019 - January 2022
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.profExp}>
                <h1 className={styles.profExpHeader}>
                    Certifications
                </h1>
                <div className={styles.profExpItems}>
                    <div className={styles.profExpItem}>
                        <div className={styles.profExpItemImgContainer3}>
                            <div className={styles.profExpItemImg3}/>
                        </div>
                        <div className={styles.profExpText}>
                            <h2 className={styles.profExpTitle}>
                                Meta Front-End Developer Professional Certificate
                            </h2>
                            <h3 className={styles.profExpDates}>
                                February 2024 Coursera
                            </h3>
                        </div>
                    </div>
                </div>
                <div className={styles.profExpItems}>
                    <div className={styles.profExpItem}>
                        <div className={styles.profExpItemImgContainer3}>
                            <div className={styles.profExpItemImg3}/>
                        </div>
                        <div className={styles.profExpText}>
                            <h2 className={styles.profExpTitle}>
                                React Native Specialization
                            </h2>
                            <h3 className={styles.profExpDates}>
                                April 2024 Coursera
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
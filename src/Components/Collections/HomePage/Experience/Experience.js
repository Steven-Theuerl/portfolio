import React from 'react'

import styles from '../Experience/Experience.module.css'

const Experience = () => {

  return (
    <div className={styles.entireExp}>
        <div className={styles.expContainer}>
            <div className={styles.profExp}>
                <h2 className={styles.profExpHeader}>
                    Experience
                </h2>
                <div className={styles.profExpItems}>
                    <div className={styles.profExpItem}>
                        <div className={styles.profExpItemImgContainer1}>
                            <div className={styles.profExpItemImg1}/>
                        </div>
                        <div className={styles.profExpText}>
                            <h3 className={styles.profExpTitle}>
                                <span>Cultivation Supervisor at <b>Goodblend</b></span>
                            </h3>
                            <h4 className={styles.profExpDates}>
                                January 2022 - November 2023
                            </h4>
                        </div>
                    </div>
                </div>
                <div className={styles.profExpItems}>
                    <div className={styles.profExpItem}>
                        <div className={styles.profExpItemImgContainer2}>
                            <div className={styles.profExpItemImg2}/>
                        </div>
                        <div className={styles.profExpText}>
                            <h3 className={styles.profExpTitle}>
                                <span>Supervisor <b>IBEX Global</b></span>
                            </h3>
                            <h4 className={styles.profExpDates}>
                                November 2019 - January 2022
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.profExp}>
                <h2 className={styles.profExpHeader}>
                    Certifications
                </h2>
                <div className={styles.profExpItems}>
                    <div className={styles.profExpItem}>
                        <div className={styles.profExpItemImgContainer3}>
                            <div className={styles.profExpItemImg3}/>
                        </div>
                        <div className={styles.profExpText}>
                            <h3 className={styles.profExpTitle}>
                                Meta Front-End Developer Professional Certificate
                            </h3>
                            <h4 className={styles.profExpDates}>
                                February 2024 Coursera
                            </h4>
                        </div>
                    </div>
                </div>
                <div className={styles.profExpItems}>
                    <div className={styles.profExpItem}>
                        <div className={styles.profExpItemImgContainer3}>
                            <div className={styles.profExpItemImg3}/>
                        </div>
                        <div className={styles.profExpText}>
                            <h3 className={styles.profExpTitle}>
                                React Native Specialization
                            </h3>
                            <h4 className={styles.profExpDates}>
                                April 2024 Coursera
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
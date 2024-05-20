import React from 'react'

import styles from '../Experience/ExperiencePC.module.css'

const ExperiencePC = () => {
  return (
    <div className={styles.entireExp}>
        <div className={styles.expContainer}>
            <div className={styles.profExp}>
                <div className={styles.profExpHeader}>
                    Professional Experience
                </div>
                <div className={styles.profExpItems}>
                    <div className={styles.profExpItem}>
                        <div className={styles.profExpItemImgContainer1}>
                            <div className={styles.profExpItemImg1}/>
                        </div>
                        <div className={styles.profExpText}>
                            <div className={styles.profExpTitle}>
                                Cultivation Supervisor at <b>Goodblend</b>
                            </div>
                            <div className={styles.profExpDates}>
                                January 2022 - November 2023
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.profExpItems}>
                    <div className={styles.profExpItem}>
                        <div className={styles.profExpItemImgContainer2}>
                            <div className={styles.profExpItemImg2}/>
                        </div>
                        <div className={styles.profExpText}>
                            <div className={styles.profExpTitle}>
                                Supervisor <b>IBEX Global</b>
                            </div>
                            <div className={styles.profExpDates}>
                                November 2019 - January 2022
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.profExp}>
                <div className={styles.profExpHeader}>
                    Certifications
                </div>
                <div className={styles.profExpItems}>
                    <div className={styles.profExpItem}>
                        <div className={styles.profExpItemImgContainer3}>
                            <div className={styles.profExpItemImg3}/>
                        </div>
                        <div className={styles.profExpText}>
                            <div className={styles.profExpTitle}>
                                Meta Front-End Developer Professional Certificate
                            </div>
                            <div className={styles.profExpDates}>
                                February 2024 Coursera
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.profExpItems}>
                    <div className={styles.profExpItem}>
                        <div className={styles.profExpItemImgContainer3}>
                            <div className={styles.profExpItemImg3}/>
                        </div>
                        <div className={styles.profExpText}>
                            <div className={styles.profExpTitle}>
                                React Native Specialization
                            </div>
                            <div className={styles.profExpDates}>
                                April 2024 Coursera
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExperiencePC
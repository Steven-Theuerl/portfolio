import React from 'react'
import styles from './WorkHero.module.css'

import hero from '../../../../assets/Images/LLWebsite/LLWebsiteKV.png'

const WorkHero = () => {

  return (
    <>
    <div className={styles.entireHero}>
        <div className={styles.heroContainer}>
            <div className={styles.heroImageContainer}>
                <img src={hero} alt='Hero for the Little Lemon Website project' className={styles.heroImage}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default WorkHero
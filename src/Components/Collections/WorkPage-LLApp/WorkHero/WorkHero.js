import React from 'react'
import styles from './WorkHero.module.css'
import { useMediaQuery } from 'react-responsive'

import hero from '../../../../assets/Images/LLApp/LLAppHeroKV.png'

const WorkHero = () => {

  return (
    <>
    <div className={styles.entireHero}>
        <div className={styles.heroContainer}>
            <div className={styles.heroImageContainer}>
                <img src={hero} alt='example of screens in application' className={styles.heroImage}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default WorkHero
import React from 'react'
import styles from './WorkHero.module.css'

const WorkHero = () => {
  return (
    <div className={styles.entireHero}>
        <div className={styles.heroContainer}>
            <div className={styles.heroImageContainer}>
                <div className={styles.heroImage}/>
            </div>
        </div>
    </div>
  )
}

export default WorkHero
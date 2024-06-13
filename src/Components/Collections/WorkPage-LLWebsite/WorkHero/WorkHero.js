import React from 'react'
import styles from './WorkHero.module.css'
import { useMediaQuery } from 'react-responsive'

const WorkHero = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 414px)' })

  return (
    <>
    <div className={styles.entireHero}>
        <div className={styles.heroContainer}>
            <div className={styles.heroImageContainer}>
                <div className={styles.heroImage}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default WorkHero
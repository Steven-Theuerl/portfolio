import React from 'react'
import styles from './WorkHero.module.css'
import { useMediaQuery } from 'react-responsive'
import demo from '../../../../assets/Videos/portfolioDemo.mp4'


const WorkHero = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 847px)' })

  return (
    <>
    <div className={styles.entireHero}>
        <div className={styles.heroContainer}>
            <div className={styles.heroVideoStyleBar}>
                <div className={styles.heroVideoStyleBarElipsesContainer}>
                    <div className={styles.heroVideoStyleBarElipses}>
                        {isMobile ? [<svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#E4E5DA"/>
                        </svg>] : [<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5" fill="#E4E5DA"/>
                        </svg>]}
                    </div>
                    <div className={styles.heroVideoStyleBarElipses}>
                        {isMobile ? [<svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#E4E5DA"/>
                        </svg>] : [<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5" fill="#E4E5DA"/>
                        </svg>]}
                    </div>
                    <div className={styles.heroVideoStyleBarElipses}>
                        {isMobile ? [<svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#E4E5DA"/>
                        </svg>] : [<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5" fill="#E4E5DA"/>
                        </svg>]}
                    </div>
                </div>
            </div>
            <div className={styles.heroImageContainer}>
                <video muted='true' playsInline='true' autoplay='true' loop='true' width='100%' height="100%" src={demo}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default WorkHero
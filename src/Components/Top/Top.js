import React from 'react'
import styles from './Top.module.css'
import { useMediaQuery } from 'react-responsive'

import TopAnimation1280px from '../../assets/Animations/TopAnimation1280px.js'
import TopAnimation414px from '../../assets/Animations/TopAnimation414px.js'
import TopAnimation415px from '../../assets/Animations/TopAnimation415px.js'
import TopAnimation848px from '../../assets/Animations/TopAnimation848px.js'

const Top = () => {

    const is1280 = useMediaQuery({query: '(min-width: 1280px)'})
    const is848 = useMediaQuery({minWidth: 848, maxWidth: 1279})
    const is415 = useMediaQuery({minWidth: 415, maxWidth: 847})
    const is414 = useMediaQuery({ query: '(max-width: 414px)' })

  return (
    <div className={styles.entireTop}>
        <div className={styles.topContainer}>
            <div className={styles.topImage}>
                {is1280 && <TopAnimation1280px/>}
                {is848 && <TopAnimation848px/>}
                {is415 && <TopAnimation415px/>}
                {is414 && <TopAnimation414px/>}
            </div>
            <div className={styles.topTextContainer}>
                <div className={styles.topTextTitle}>
                    Steven Theuerl <br></br>Software Engineer
                </div>
                <div className={styles.topTextSubTitle}>
                    Front-end engineer based in PA, USA
                </div>
                <div className={styles.separator}/>
                <div className={styles.topContactBox}>
                    <div className={styles.topContactBox1}>
                        Contact
                    </div>
                    <div className={styles.topContactBox2}>
                        <span>
                            feel free to <a className={styles.anchor}> Get in touch with me<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.14645 10.6464C2.95118 10.8417 2.95118 11.1583 3.14645 11.3536C3.34171 11.5488 3.65829 11.5488 3.85355 11.3536L3.14645 10.6464ZM12 3C12 2.72386 11.7761 2.5 11.5 2.5L7 2.5C6.72386 2.5 6.5 2.72386 6.5 3C6.5 3.27614 6.72386 3.5 7 3.5L11 3.5L11 7.5C11 7.77614 11.2239 8 11.5 8C11.7761 8 12 7.77614 12 7.5L12 3ZM3.85355 11.3536L11.8536 3.35355L11.1464 2.64645L3.14645 10.6464L3.85355 11.3536Z" fill="green"/>
                            </svg></a>
                        </span>
                    </div>
                    <div className={styles.topContactBox3}>
                        <div className={styles.topContactBox3Logo1}>
                            <a title='Linkedin Account'
                            href='https://www.linkedin.com/in/steven-theuerl-919175209/'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 21H9V9H13V11C13.4211 10.4643 13.9555 10.0284 14.565 9.72356C15.1744 9.41875 15.8438 9.25259 16.525 9.237C17.7164 9.24361 18.8565 9.72242 19.6954 10.5684C20.5343 11.4144 21.0035 12.5586 21 13.75V21H17V14.25C16.9226 13.7096 16.6527 13.2153 16.2398 12.8581C15.8269 12.5009 15.2989 12.3048 14.753 12.306C14.5087 12.3137 14.2684 12.3707 14.0466 12.4736C13.8249 12.5765 13.6262 12.7231 13.4624 12.9046C13.2987 13.0862 13.1734 13.2989 13.0939 13.5301C13.0144 13.7613 12.9825 14.0062 13 14.25V21ZM7 21H3V9H7V21ZM5 7C4.46957 7 3.96086 6.78929 3.58579 6.41421C3.21071 6.03914 3 5.53043 3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3C5.53043 3 6.03914 3.21071 6.41421 3.58579C6.78929 3.96086 7 4.46957 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z" fill="#424242"/>
                            </svg></a>
                        </div>
                        <a title='Github Account'
                        className={styles.topContactBox3Logo2Container}
                        href='https://github.com/Steven-Theuerl'/>
                    </div>
                </div>
                <button
                    className={styles.aboutTalkButton}>
                        Talk with me
                </button>
            </div>
        </div>
    </div>
  )
}

export default Top
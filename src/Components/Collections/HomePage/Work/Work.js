import React from 'react'
import styles from '../Work/Work.module.css'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import portfolioMVPC from '../../../../assets/Images/Portfolio/portfolioHero.png'
import portfolioMVMobile from '../../../../assets/Images/Portfolio/portfolioHeroMobile.png'
import LLAppMVMobile from '../../../../assets/Images/LLApp/LLAppHeroMobile.png'
import LLAppMVPC from '../../../../assets/Images/LLApp/LLAppHero.png'
import LLWebsiteMVMobile from '../../../../assets/Images/LLWebsite/LLWebsiteHeroMobile.png'
import LLWebsiteMVPC from '../../../../assets/Images/LLWebsite/LLWebsiteHero.png'

import TsundokuMVMobile from '../../../../assets/Images/Tsundoku/TsundokuHeroMobile.png'
import TsundokuMVPC from '../../../../assets/Images/Tsundoku/TsundokuHero.png'


const Work = () => {

  const screenUnder847px = useMediaQuery({query: '(max-width: 847px)'})

  return (
    <div className={styles.entireWork}>
        <div className={styles.workContentContainer}>
            <h2 className={styles.workTitle}>
                Work
            </h2>
            <Link to='/Work-Tsundoku' reloadDocument>
                <div className={styles.workContent}>
                        <img src={screenUnder847px ? TsundokuMVMobile : TsundokuMVPC} alt='Thumbnail of the `About Tsundoku Page` Link' className={styles.workContentImage}/>
                    <h3 className={styles.workText1}>
                        <span className={styles.workText1Title}>Tsundoku <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="#279070"/>
                        </svg>
                        </span>
                    </h3>
                    <p className={styles.workText2}>
                        <span>My partner and I wanted our own place that we could publish articles related to web development, design, and lifestyle - so we made one. </span>
                    </p>
                    <div className={styles.workText3}>
                        <p className={styles.workContentTags}>Next.js</p>
                        <p className={styles.workContentTags}>Sanity.io</p>
                        <p className={styles.workContentTags}>TypeScript</p>
                        <p className={styles.workContentTags}>TailwindCSS</p>
                    </div>
                </div>
            </Link>
            <Link to='/Work-Portfolio' reloadDocument>
                <div className={styles.workContent}>
                        <img src={screenUnder847px ? portfolioMVMobile : portfolioMVPC} alt='Thumbnail of the `About Portfolio Page` Link' className={styles.workContentImage}/>
                    <h3 className={styles.workText1}>
                        <span className={styles.workText1Title}>Portfolio <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="#279070"/>
                        </svg>
                        </span>
                    </h3>
                    <p className={styles.workText2}>
                        <span>My Portfolio Site that you are currently viewing. If you want to know more about what I learned while making it, feel free to click here!</span>
                    </p>
                    <div className={styles.workText3}>
                        <p className={styles.workContentTags}>React</p>
                        <p className={styles.workContentTags}>JavaScript</p>
                        <p className={styles.workContentTags}>CSS</p>
                        <p className={styles.workContentTags}>HTML</p>
                    </div>
                </div>
            </Link>
            <Link to='/Work-LLApp' reloadDocument>
                <div className={styles.workContent}>
                    <img src={screenUnder847px ? LLAppMVMobile : LLAppMVPC} alt='Thumbnail for the `About My Mobile Application Page` Link' className={styles.workContentImage}/>
                    <h3 className={styles.workText1}>
                        <span className={styles.workText1Title}>Mobile Application <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="#279070"/></svg>
                        </span>
                    </h3>
                    <p className={styles.workText2}>
                        <span>My first Cross-Platform React Native App. It was completed as a Capstone Project for my certification course on Coursera through a React Native Specialization offered by Meta.</span>
                    </p>
                    <div className={styles.workText3}>
                        <p className={styles.workContentTags}>React Native</p>
                        <p className={styles.workContentTags}>JavaScript</p>
                    </div>
                </div>
            </Link>
            <Link to='/Work-LLWebsite' reloadDocument>
                <div className={styles.workContent}>
                    <img src={screenUnder847px ? LLWebsiteMVMobile : LLWebsiteMVPC} alt='Thumbnail for the `About My First Website` Page Link' className={styles.workContentImage}/>
                    <h3 className={styles.workText1}>
                        <span className={styles.workText1Title}>First Website <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="#279070"/></svg>
                        </span>
                    </h3>
                    <p className={styles.workText2}>
                        <span>The first website that I created. This was done through the capstone project offered by Meta through the Coursera Front End Developer Certification.</span>
                    </p>
                    <div className={styles.workText3}>
                        <p className={styles.workContentTags}>React</p>
                        <p className={styles.workContentTags}>JavaScript</p>
                        <p className={styles.workContentTags}>CSS</p>
                        <p className={styles.workContentTags}>HTML</p>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Work
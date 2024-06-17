import React from 'react'
import styles from '../Work/Work.module.css'
import { Link } from 'react-router-dom'

const Work = () => {
  return (
    <div className={styles.entireWork}>
        <div className={styles.workContentContainer}>
            <div className={styles.workTitle}>
                <span>Work</span>
            </div>
            <Link to='/Work-Portfolio' reloadDocument>
                <div className={styles.workContent}>
                        <div className={styles.workContent1Image}/>
                    <div className={styles.workText1}>
                        <span className={styles.workText1Title}>Portfolio <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="#279070"/>
                        </svg>
                        </span>
                    </div>
                    <div className={styles.workText2}>
                        <span>My Portfolio Site that you are currently viewing. If you want to know more about what I leanred while making it, feel free to click here!</span>
                    </div>
                    <div className={styles.workText3}>
                        <div className={styles.workContentTags}>React</div> <div className={styles.workContentTags}>JavaScript</div>
                    </div>
                </div>
            </Link>
            <Link to='/Work-LLApp' reloadDocument>
                <div className={styles.workContent}>
                    <div className={styles.workContent2Image}/>
                    <div className={styles.workText1}>
                        <span className={styles.workText1Title}>Mobile Application <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="#279070"/></svg>
                        </span>
                    </div>
                    <div className={styles.workText2}>
                        <span>My first Cross-Platfrom React Native App. It was completed as a Capstone Project for my certification course on Coursera through a React Native Specialization offered by Meta.</span>
                    </div>
                    <div className={styles.workText3}>
                        <div className={styles.workContentTags}>React</div> <div className={styles.workContentTags}>JavaScript</div>
                    </div>
                </div>
            </Link>
            <Link to='/Work-LLWebsite' reloadDocument>
            <div className={styles.workContent}>
                    <div className={styles.workContent3Image}/>
                <div className={styles.workText1}>
                    <span className={styles.workText1Title}>First Website <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="#279070"/></svg>
                    </span>
                </div>
                <div className={styles.workText2}>
                    <span> The first website that I created. This was done through the capstone project offered by Meta through the Coursera Front End Developer Certification.</span>
                </div>
                <div className={styles.workText3}>
                    <div className={styles.workContentTags}>React</div> <div className={styles.workContentTags}>JavaScript</div>
                </div>
            </div>
            </Link>
            <div className={styles.workContent}>
                <div className={styles.workContent4Image}/>
                <div className={styles.workText1}>
                    <span className={styles.workText1Title}>Currently in Development <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="#279070"/></svg>
                    </span>
                </div>
                <div className={styles.workText2}>
                    <span>I am currently working on a service that will collect and organize information to make it easier to find allergen sensitive restaurants, grocery stores, and recipes for people who need them. </span>
                </div>
                <div className={styles.workText3}>
                    <div className={styles.workContentTags}>React</div> <div className={styles.workContentTags}>JavaScript</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
import React from 'react'
import styles from '../Work/Work.module.css'
import { Link } from 'react-router-dom'

import '../../../../assets/Fonts/Montserrat/static'

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
                        <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
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
                        <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/></svg>
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
            <div className={styles.workContent}>
                    <div className={styles.workContent1Image}/>
                <div className={styles.workText1}>
                    <span className={styles.workText1Title}>Unilife <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/></svg>
                    </span>
                </div>
                <div className={styles.workText2}>
                    <span>This is the personal blog and portfolio site of uni, a Japanese UI designer. Project description text.Project description text.</span>
                </div>
                <div className={styles.workText3}>
                    <div className={styles.workContentTags}>React</div> <div className={styles.workContentTags}>JavaScript</div>
                </div>
            </div>
            <div className={styles.workContent}>
                <div className={styles.workContent1Image}/>
                <div className={styles.workText1}>
                    <span className={styles.workText1Title}>Unilife <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/></svg>
                    </span>
                </div>
                <div className={styles.workText2}>
                    <span>This is the personal blog and portfolio site of uni, a Japanese UI designer. Project description text.Project description text.</span>
                </div>
                <div className={styles.workText3}>
                    <div className={styles.workContentTags}>React</div> <div className={styles.workContentTags}>JavaScript</div>
                </div>
            </div>

            <div className={styles.workContent}>
                <div className={styles.workContent1Image}/>
                <div className={styles.workText1}>
                    <span className={styles.workText1Title}>Unilife <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/></svg>
                    </span>
                </div>
                <div className={styles.workText2}>
                    <span>This is the personal blog and portfolio site of uni, a Japanese UI designer. Project description text.Project description text.</span>
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
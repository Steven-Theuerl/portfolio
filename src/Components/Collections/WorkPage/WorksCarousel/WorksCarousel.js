import React from 'react'
import styles from './WorksCarousel.module.css'

const WorksCarousel = () => {
  return (
    <>
        <div className={styles.entireWorksCarousel}>
            <div className={styles.worksCarouselContainer}>
                <div className={styles.worksCarouselTopBar}>
                    <span className={styles.worksCarouselTitle}>See Other Works</span>
                    <div className={styles.worksCarouselButtons}>
                        <button className={styles.worksCarouselSlider} id="slideLeft"
                                onClick={() => {
                                    document.getElementById('mediaScroller').scrollBy({
                                        left: -354,
                                        behavior: 'smooth'
                                    })}}>
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#E4E5DA"/>
                            <path d="M25 17L22 19.5L19 22L25 27" stroke="#111111" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button className={styles.worksCarouselSlider} id='slideRight'
                                onClick={() => document.getElementById('mediaScroller').scrollBy({
                                    left: 354,
                                    behavior: 'smooth'
                                })}>
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-0.5" y="0.5" width="43" height="43" rx="21.5" transform="matrix(-1 0 0 1 43 0)" stroke="#E4E5DA"/>
                            <path d="M19 17L22 19.5L25 22L19 27" stroke="#111111" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="mediaScroller" className={styles.mediaScroller}>
                    <div className={styles.worksCarouselCard}>
                        <div className={styles.worksCarouselCardImage1}/>
                        <div className={styles.worksTextHeader}>
                            <span>Portfolio</span>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                            </svg>
                        </div>
                        <div className={styles.worksTextDescription}>
                        Not only is it simple and the content is easy to read, but it also shows what makes me unique. The design was designed by my wife :)
                        </div>
                        <div className={styles.worksTextTagsContainer}>
                            <div className={styles.worksTextTags}>
                                React
                            </div>
                            <div className={styles.worksTextTags}>
                                JavaScript
                            </div>
                        </div> 
                    </div>
                    <div className={styles.worksCarouselCard}>
                        <div className={styles.worksCarouselCardImage2}/>
                        <div className={styles.worksTextHeader}>
                            <span>Portfolio</span>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                            </svg>
                        </div>
                        <div className={styles.worksTextDescription}>
                        Not only is it simple and the content is easy to read, but it also shows what makes me unique. The design was designed by my wife :)
                        </div>
                        <div className={styles.worksTextTagsContainer}>
                            <div className={styles.worksTextTags}>
                                React
                            </div>
                            <div className={styles.worksTextTags}>
                                JavaScript
                            </div>
                        </div> 
                    </div>
                    <div className={styles.worksCarouselCard}>
                        <div className={styles.worksCarouselCardImage1}/>
                        <div className={styles.worksTextHeader}>
                            <span>Portfolio</span>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                            </svg>
                        </div>
                        <div className={styles.worksTextDescription}>
                        Not only is it simple and the content is easy to read, but it also shows what makes me unique. The design was designed by my wife :)
                        </div>
                        <div className={styles.worksTextTagsContainer}>
                            <div className={styles.worksTextTags}>
                                React
                            </div>
                            <div className={styles.worksTextTags}>
                                JavaScript
                            </div>
                        </div> 
                    </div>
                    <div className={styles.worksCarouselCard}>
                        <div className={styles.worksCarouselCardImage2}/>
                        <div className={styles.worksTextHeader}>
                            <span>Portfolio</span>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                            </svg>
                        </div>
                        <div className={styles.worksTextDescription}>
                        Not only is it simple and the content is easy to read, but it also shows what makes me unique. The design was designed by my wife :)
                        </div>
                        <div className={styles.worksTextTagsContainer}>
                            <div className={styles.worksTextTags}>
                                React
                            </div>
                            <div className={styles.worksTextTags}>
                                JavaScript
                            </div>
                        </div> 
                    </div>

                    <div className={styles.worksCarouselCard}>
                        <div className={styles.worksCarouselCardImage1}/>
                        <div className={styles.worksTextHeader}>
                            <span>Portfolio</span>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                            </svg>
                        </div>
                        <div className={styles.worksTextDescription}>
                        Not only is it simple and the content is easy to read, but it also shows what makes me unique. The design was designed by my wife :)
                        </div>
                        <div className={styles.worksTextTagsContainer}>
                            <div className={styles.worksTextTags}>
                                React
                            </div>
                            <div className={styles.worksTextTags}>
                                JavaScript
                            </div>
                        </div> 
                    </div>

                    <div className={styles.worksCarouselCard}>
                        <div className={styles.worksCarouselCardImage2}/>
                        <div className={styles.worksTextHeader}>
                            <span>Portfolio</span>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                            </svg>
                        </div>
                        <div className={styles.worksTextDescription}>
                        Not only is it simple and the content is easy to read, but it also shows what makes me unique. The design was designed by my wife :)
                        </div>
                        <div className={styles.worksTextTagsContainer}>
                            <div className={styles.worksTextTags}>
                                React
                            </div>
                            <div className={styles.worksTextTags}>
                                JavaScript
                            </div>
                        </div> 
                    </div>

                    <div className={styles.worksCarouselCard}>
                        <div className={styles.worksCarouselCardImage1}/>
                        <div className={styles.worksTextHeader}>
                            <span>Portfolio</span>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                            </svg>
                        </div>
                        <div className={styles.worksTextDescription}>
                        Not only is it simple and the content is easy to read, but it also shows what makes me unique. The design was designed by my wife :)
                        </div>
                        <div className={styles.worksTextTagsContainer}>
                            <div className={styles.worksTextTags}>
                                React
                            </div>
                            <div className={styles.worksTextTags}>
                                JavaScript
                            </div>
                        </div> 
                    </div>

                    <div className={styles.worksCarouselCard}>
                        <div className={styles.worksCarouselCardImage2}/>
                        <div className={styles.worksTextHeader}>
                            <span>Portfolio</span>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                            </svg>
                        </div>
                        <div className={styles.worksTextDescription}>
                        Not only is it simple and the content is easy to read, but it also shows what makes me unique. The design was designed by my wife :)
                        </div>
                        <div className={styles.worksTextTagsContainer}>
                            <div className={styles.worksTextTags}>
                                React
                            </div>
                            <div className={styles.worksTextTags}>
                                JavaScript
                            </div>
                        </div> 
                    </div>

                    <div className={styles.worksCarouselCard}>
                        <div className={styles.worksCarouselCardImage1}/>
                        <div className={styles.worksTextHeader}>
                            <span>Portfolio</span>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                            </svg>
                        </div>
                        <div className={styles.worksTextDescription}>
                        Not only is it simple and the content is easy to read, but it also shows what makes me unique. The design was designed by my wife :)
                        </div>
                        <div className={styles.worksTextTagsContainer}>
                            <div className={styles.worksTextTags}>
                                React
                            </div>
                            <div className={styles.worksTextTags}>
                                JavaScript
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.worksCarouselLeaveButtonContainer}>
            <button className={styles.backToHomeButton}><span>Back to Home</span></button>
        </div>
    </>
  )
}

export default WorksCarousel
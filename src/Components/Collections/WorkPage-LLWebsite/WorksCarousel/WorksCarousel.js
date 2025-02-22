import React from 'react'
import styles from './WorksCarousel.module.css'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

import portfolioCardImg from '../../../../assets/Images/Portfolio/portfolioHeroMobile.png'
import LLAppCardImg from '../../../../assets/Images/LLApp/LLAppHeroMobile.png'
import LLWebCardImg from '../../../../assets/Images/LLWebsite/LLWebsiteHeroMobile.png'
import TsundokuCardImg from '../../../../assets/Images/Tsundoku/TsundokuCarouselCard.png'

const WorksCarousel = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 414px)' })

  return (
    <>
        <div className={styles.entireWorksCarousel}>
            <div className={styles.worksCarouselContainer}>
                <div className={styles.worksCarouselTopBar}>
                    <h2 className={styles.worksCarouselTitle}>See Other Works</h2>
                    <div className={styles.worksCarouselButtons}>
                        {isMobile ?
                            [<button className={styles.worksCarouselSlider} id="slideLeft"
                                onClick={() => {
                                    document.getElementById('mediaScroller').scrollBy({
                                        left: -280,
                                        behavior: 'smooth'
                                    })}}>
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#E4E5DA"/>
                                <path d="M25 17L22 19.5L19 22L25 27" stroke="#111111" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>] :
                            [<button className={styles.worksCarouselSlider} id="slideLeft"
                                onClick={() => {
                                    document.getElementById('mediaScroller').scrollBy({
                                        left: -354,
                                        behavior: 'smooth'
                                    })}}>
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#E4E5DA"/>
                                <path d="M25 17L22 19.5L19 22L25 27" stroke="#111111" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>]}
                        {isMobile ?
                        [<button className={styles.worksCarouselSlider} id='slideRight'
                                 onClick={() => document.getElementById('mediaScroller').scrollBy({
                                    left: 280,
                                    behavior: 'smooth'
                                 })}>
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-0.5" y="0.5" width="43" height="43" rx="21.5" transform="matrix(-1 0 0 1 43 0)" stroke="#E4E5DA"/>
                            <path d="M19 17L22 19.5L25 22L19 27" stroke="#111111" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>] :
                        [<button className={styles.worksCarouselSlider} id='slideRight'
                                 onClick={() => document.getElementById('mediaScroller').scrollBy({
                                    left: 354,
                                    behavior: 'smooth'
                                })}>
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-0.5" y="0.5" width="43" height="43" rx="21.5" transform="matrix(-1 0 0 1 43 0)" stroke="#E4E5DA"/>
                            <path d="M19 17L22 19.5L25 22L19 27" stroke="#111111" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>]}
                    </div>
                </div>
                <div id="mediaScroller" className={styles.mediaScroller}>
                    <Link to='/Work-Portfolio' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <img src={portfolioCardImg} alt='A view of the portfolio site from a mobile device and a personal computer.' className={styles.worksCarouselCardImage1}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Portfolio</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                                My Portfolio Site that you are currently viewing. If you want to know more about what I learned while making it, click anywhere on this card!
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                                <p className={styles.worksTextTags}>
                                    JavaScript
                                </p>
                                <p className={styles.worksTextTags}>
                                    HTML
                                </p>
                                <p className={styles.worksTextTags}>
                                    CSS
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/Work-LLApp' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <img src={LLAppCardImg} alt='A preview of multiple screens from a mobile application' className={styles.worksCarouselCardImage2}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Mobile Application</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                                My first Cross-Platform React Native App. It was completed as a Capstone Project for my certification course on Coursera through offered by Meta.
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                                <p className={styles.worksTextTags}>
                                    JavaScript
                                </p>
                                <p className={styles.worksTextTags}>
                                    HTML
                                </p>
                                <p className={styles.worksTextTags}>
                                    CSS
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/Work-Tsundoku' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <img src={TsundokuCardImg} alt='A preview for the Tsundoku.blog website.' className={styles.worksCarouselCardImage3}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Tsundoku</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                              My partner and I wanted our own place that we could publish articles related to web development, design, and lifestyle - so we made one.
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                            <p className={styles.worksTextTags}>
                                    Next.js
                                </p>
                                <p className={styles.worksTextTags}>
                                    Sanity
                                </p>
                                <p className={styles.worksTextTags}>
                                    TypeScript
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/Work-Portfolio' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <img src={portfolioCardImg} alt='A view of the portfolio site from a mobile device and a personal computer.' className={styles.worksCarouselCardImage1}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Portfolio</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                                My Portfolio Site that you are currently viewing. If you want to know more about what I learned while making it, click anywhere on this card!
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                                <p className={styles.worksTextTags}>
                                    JavaScript
                                </p>
                                <p className={styles.worksTextTags}>
                                    HTML
                                </p>
                                <p className={styles.worksTextTags}>
                                    CSS
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/Work-LLApp' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <img src={LLAppCardImg} alt='A preview of multiple screens from a mobile application' className={styles.worksCarouselCardImage2}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Mobile Application</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                                My first Cross-Platform React Native App. It was completed as a Capstone Project for my certification course on Coursera through offered by Meta.
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                                <p className={styles.worksTextTags}>
                                    JavaScript
                                </p>
                                <p className={styles.worksTextTags}>
                                    HTML
                                </p>
                                <p className={styles.worksTextTags}>
                                    CSS
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/Work-Tsundoku' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <img src={TsundokuCardImg} alt='A preview for the Tsundoku.blog website.' className={styles.worksCarouselCardImage3}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Tsundoku</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                              My partner and I wanted our own place that we could publish articles related to web development, design, and lifestyle - so we made one.
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                            <p className={styles.worksTextTags}>
                                    Next.js
                                </p>
                                <p className={styles.worksTextTags}>
                                    Sanity
                                </p>
                                <p className={styles.worksTextTags}>
                                    TypeScript
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/Work-Portfolio' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <img src={portfolioCardImg} alt='A view of the portfolio site from a mobile device and a personal computer.' className={styles.worksCarouselCardImage1}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Portfolio</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                                My Portfolio Site that you are currently viewing. If you want to know more about what I learned while making it, click anywhere on this card!
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                                <p className={styles.worksTextTags}>
                                    JavaScript
                                </p>
                                <p className={styles.worksTextTags}>
                                    HTML
                                </p>
                                <p className={styles.worksTextTags}>
                                    CSS
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/Work-LLApp' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <img src={LLAppCardImg} alt='A preview of multiple screens from a mobile application' className={styles.worksCarouselCardImage2}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Mobile Application</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                                My first Cross-Platform React Native App. It was completed as a Capstone Project for my certification course on Coursera through offered by Meta.
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                                <p className={styles.worksTextTags}>
                                    JavaScript
                                </p>
                                <p className={styles.worksTextTags}>
                                    HTML
                                </p>
                                <p className={styles.worksTextTags}>
                                    CSS
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/Work-Tsundoku' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <img src={TsundokuCardImg} alt='A preview for the Tsundoku.blog website.' className={styles.worksCarouselCardImage3}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Tsundoku</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                              My partner and I wanted our own place that we could publish articles related to web development, design, and lifestyle - so we made one.
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                            <p className={styles.worksTextTags}>
                                    Next.js
                                </p>
                                <p className={styles.worksTextTags}>
                                    Sanity
                                </p>
                                <p className={styles.worksTextTags}>
                                    TypeScript
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <div className={styles.worksCarouselLeaveButtonContainer}>
            <Link to='/' reloadDocument>
                <button className={styles.backToHomeButton}><span>Back to Home</span></button>
            </Link>
        </div>
    </>
  )
}

export default WorksCarousel
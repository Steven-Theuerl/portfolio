import React from 'react'
import styles from './WorksCarousel.module.css'
import { useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'



const WorksCarousel = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 414px)' })

    const elementRef = useRef(null);

    const [initialPosition, setInitialPosition] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleTouchStart = (event) => {
      setInitialPosition(event.touches[0].clientX);
      setIsDragging(true);
    };

    const handleTouchMove = (event) => {
      if (!isDragging) return;

      const currentDistance = (event.touches[0].clientX - initialPosition) * 1.75;
      elementRef.current.scrollLeft -= currentDistance;
      setInitialPosition(event.touches[0].clientX);
      event.preventDefault();
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };


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
                <div id="mediaScroller" className={styles.mediaScroller}
                     ref={elementRef}
                     onTouchStart={handleTouchStart}
                     onTouchMove={handleTouchMove}
                     onTouchEnd={handleTouchEnd}
                     >
                    <Link to='/Work-Portfolio' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <div className={styles.worksCarouselCardImage1}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Portfolio</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                                My Portfolio Site that you are currently viewing. If you want to know more about what I leanred while making it, click anywhere on this card!
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                                <p className={styles.worksTextTags}>
                                    React
                                </p>
                                <p className={styles.worksTextTags}>
                                    JavaScript
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/Work-LLApp' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <div className={styles.worksCarouselCardImage2}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Mobile Application</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                                My first Cross-Platfrom React Native App. It was completed as a Capstone Project for my certification course on Coursera through offered by Meta.
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                                <p className={styles.worksTextTags}>
                                    React
                                </p>
                                <p className={styles.worksTextTags}>
                                    JavaScript
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <div className={styles.worksCarouselCardImage3}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Work in Progress</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                                This project is currently under construction, but is useful to fill this carousel :) Clicking here will take you back to the top page.
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                                <p className={styles.worksTextTags}>
                                    React
                                </p>
                                <p className={styles.worksTextTags}>
                                    JavaScript
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/Work-Portfolio' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <div className={styles.worksCarouselCardImage1}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Portfolio</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                                My Portfolio Site that you are currently viewing. If you want to know more about what I leanred while making it, click anywhere on this card!
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                                <p className={styles.worksTextTags}>
                                    React
                                </p>
                                <p className={styles.worksTextTags}>
                                    JavaScript
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/Work-LLApp' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <div className={styles.worksCarouselCardImage2}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Mobile Application</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                                    My first Cross-Platfrom React Native App. It was completed as a Capstone Project for my certification course on Coursera through offered by Meta.
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                                <p className={styles.worksTextTags}>
                                    React
                                </p>
                                <p className={styles.worksTextTags}>
                                    JavaScript
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <div className={styles.worksCarouselCardImage3}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Work in Progress</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                                This project is currently under construction, but is useful to fill this carousel :) Clicking here will take you back to the top page.
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                                <p className={styles.worksTextTags}>
                                    React
                                </p>
                                <p className={styles.worksTextTags}>
                                    JavaScript
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/Work-Portfolio' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <div className={styles.worksCarouselCardImage1}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Portfolio</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                                My Portfolio Site that you are currently viewing. If you want to know more about what I leanred while making it, click anywhere on this card!
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                                <p className={styles.worksTextTags}>
                                    React
                                </p>
                                <p className={styles.worksTextTags}>
                                    JavaScript
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/Work-LLApp' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <div className={styles.worksCarouselCardImage2}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Mobile Application</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                                    My first Cross-Platfrom React Native App. It was completed as a Capstone Project for my certification course on Coursera through offered by Meta.
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                                <p className={styles.worksTextTags}>
                                    React
                                </p>
                                <p className={styles.worksTextTags}>
                                    JavaScript
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/' reloadDocument>
                        <div className={styles.worksCarouselCard}>
                            <div className={styles.worksCarouselCardImageContainer}>
                                <div className={styles.worksCarouselCardImage3}/>
                            </div>
                            <h3 className={styles.worksTextHeader}>
                                <span>Work in Progress</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L6.93125 13.95L11.1312 9.75H2V8.25H11.1312L6.93125 4.05L8 3L14 9L8 15Z" fill="green"/>
                                </svg>
                            </h3>
                            <p className={styles.worksTextDescription}>
                                This project is currently under construction, but is useful to fill this carousel :) Clicking here will take you back to the top page.
                            </p>
                            <div className={styles.worksTextTagsContainer}>
                                <p className={styles.worksTextTags}>
                                    React
                                </p>
                                <p className={styles.worksTextTags}>
                                    JavaScript
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
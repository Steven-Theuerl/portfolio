import React from 'react'
import styles from '../About/About.module.css'
import { Link } from 'react-router-dom'
import topImage from '../../../../assets/Images/topImage.png'

const About = () => {
  return (
    <div className={styles.entireAbout}>
        <div className={styles.aboutContainer}>
            <h2 className={styles.aboutTitleText}>
                About
            </h2>
            <div className={styles.aboutImgContainer}>
                <img src={topImage} alt='a smiling ghost, looking at you and happily explaining his work' className={styles.aboutImg}/>
            </div>
            <h3 className={styles.aboutHeaderText}>
                Hello! I'm Steven.
            </h3>
            <p className={styles.aboutBodyText}>
                    I have never been afraid to try or study something new. That quality has been fueled by a deep sense of fulfillment from exploration, discovery, and applying my knowledge in a practical and useful way. It has also allowed me to collect various types of work and life experience. I naturally approach challenges with a thoughtful and analytical mindset and often explore new innovative technologies and opportunities for improvement of my own life and skills, which led me to coding as a hobby. Now I collaborate with creators, think about my projects while in the shower and eating dinner, and can easily lose track of time while working on them. I have just started my journey as a developer, but I am very excited to contribute to the world in a meaningful way. Thank you for viewing and reading through my website!
            </p>
            <div className={styles.aboutQualifications}>
                <div className={styles.aboutQualificationsEducation}>
                    <h3 className={styles.aboutQualificationsTitle}>
                        Education
                    </h3>
                    <div className={styles.aboutQualificationsEducationItems}>
                        <div className={styles.aboutQualificationsEducationItem}>
                            <h4 className={styles.aboutQualificationsEducationItemTitle}>
                                <b>Associate of Science in Natural Sciences</b>
                            </h4>
                            <h5 className={styles.aboutQualificationsEducationItemSubTitle}>
                                Community College of Beaver County at Monaca, PA
                            </h5>
                            <h6 className={styles.aboutQualificationsEducationItemDate}>
                                June 2018
                            </h6>
                        </div>
                        <div className={styles.aboutQualificationsEducationItem}>
                            <h4 className={styles.aboutQualificationsEducationItemTitle}>
                                <b>Bachelor of Science in Horticulture</b>
                            </h4>
                            <h5 className={styles.aboutQualificationsEducationItemSubTitle}>
                                <span>Colorado State University at Fort Collins, CO</span>
                            </h5>
                            <h6 className={styles.aboutQualificationsEducationItemDate}>
                                August 2021
                            </h6>
                        </div>
                    </div>
                    <div className={styles.aboutQualificationsHobbies}>
                        <h3 className={styles.aboutQualificationsTitle}>
                            Hobbies
                        </h3>
                        <p className={styles.aboutQualificationsHobbiesDescription}>
                            All of my time is happily given to my wife, my child, and my work. But I also enjoy taking care of plants, cooking, video games (but really just Elden Ring), DIY projects, lots of exercise, and learning!
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.aboutLinks}>
                <div>
                    <a className={styles.aboutAnchor} href='https://www.linkedin.com/in/steven-theuerl-919175209/'>LinkedIn<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.14645 10.6464C2.95118 10.8417 2.95118 11.1583 3.14645 11.3536C3.34171 11.5488 3.65829 11.5488 3.85355 11.3536L3.14645 10.6464ZM12 3C12 2.72386 11.7761 2.5 11.5 2.5L7 2.5C6.72386 2.5 6.5 2.72386 6.5 3C6.5 3.27614 6.72386 3.5 7 3.5L11 3.5L11 7.5C11 7.77614 11.2239 8 11.5 8C11.7761 8 12 7.77614 12 7.5L12 3ZM3.85355 11.3536L11.8536 3.35355L11.1464 2.64645L3.14645 10.6464L3.85355 11.3536Z" fill="green"/>
                    </svg></a>
                </div>
                <div>
                    <a className={styles.aboutAnchor} href='https://github.com/Steven-Theuerl'>Github<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.14645 10.6464C2.95118 10.8417 2.95118 11.1583 3.14645 11.3536C3.34171 11.5488 3.65829 11.5488 3.85355 11.3536L3.14645 10.6464ZM12 3C12 2.72386 11.7761 2.5 11.5 2.5L7 2.5C6.72386 2.5 6.5 2.72386 6.5 3C6.5 3.27614 6.72386 3.5 7 3.5L11 3.5L11 7.5C11 7.77614 11.2239 8 11.5 8C11.7761 8 12 7.77614 12 7.5L12 3ZM3.85355 11.3536L11.8536 3.35355L11.1464 2.64645L3.14645 10.6464L3.85355 11.3536Z" fill="green"/>
                    </svg></a>
                </div>
                <div>
                    <a className={styles.aboutAnchor} >Resume<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.14645 10.6464C2.95118 10.8417 2.95118 11.1583 3.14645 11.3536C3.34171 11.5488 3.65829 11.5488 3.85355 11.3536L3.14645 10.6464ZM12 3C12 2.72386 11.7761 2.5 11.5 2.5L7 2.5C6.72386 2.5 6.5 2.72386 6.5 3C6.5 3.27614 6.72386 3.5 7 3.5L11 3.5L11 7.5C11 7.77614 11.2239 8 11.5 8C11.7761 8 12 7.77614 12 7.5L12 3ZM3.85355 11.3536L11.8536 3.35355L11.1464 2.64645L3.14645 10.6464L3.85355 11.3536Z" fill="green"/>
                    </svg></a>
                </div>
            </div>
            <Link to='/Contact' reloadDocument>
                <button className={styles.aboutTalkButton}>Talk with me</button>
            </Link>
        </div>
    </div>
  )
}

export default About
import React from 'react'
import styles from '../About/About.module.css'

const About = () => {
  return (
    <div className={styles.entireAbout}>
        <div className={styles.aboutContainer}>
            <div className={styles.aboutTitleText}>
                <span>About</span>
            </div>
            <div className={styles.aboutImgContainer}/>
            <div className={styles.aboutHeaderText}>
                <span>Hello! I’m Steven. </span>
            </div>
            <div className={styles.aboutBodyText}>
                <span>A highly motivated, detail-oriented, and well-organized leader, learner, and team-player with over 10 years of work history. I have a passion for learning and using new technologies, developing functional and engaging experiences for users, and using critical thinking to solve complex problems. I have only recently started my web development journey, but I now wake up everyday excited to work on my projects. I am seeking an opportunity to apply my skills and knowledge, learn from experienced professionals, and contribute to innovative projects that drive user engagement and satisfaction.</span>
            </div>
            <div className={styles.aboutQualifications}>
                <div className={styles.aboutQualificationsEducation}>
                    <div className={styles.aboutQualificationsTitle}>
                        <span>Education</span>
                    </div>

                    <div className={styles.aboutQualificationsEducationItems}>
                        <div className={styles.aboutQualificationsEducationItem}>
                            <div className={styles.aboutQualificationsEducationItemTitle}>
                                <b>Associate of Science in Natural Sciences</b>
                                <br></br>
                                <span>Community College of Beaver County at Monaca, PA</span>
                            </div>
                            <div className={styles.aboutQualificationsEducationItemDate}>
                                <span>June 2018</span>
                            </div>
                        </div>
                        <div className={styles.aboutQualificationsEducationItem}>
                            <div className={styles.aboutQualificationsEducationItemTitle}>
                                <b>Bachelor of Science in Horticulture</b>
                                <br></br>
                                <span>Colorado State University at Fort Collins, CO</span>
                            </div>
                            <div className={styles.aboutQualificationsEducationItemDate}>
                                <span>August 2021</span>
                            </div>
                        </div>
                    </div>

                <div className={styles.aboutQualificationsHobbies}>
                    <div className={styles.aboutQualificationsTitle}>
                        <div>
                            <span>Hobbies</span>
                        </div>

                    </div>
                    <div className={styles.aboutQualificationsHobbiesDescription}>
                            <span>
                                Gardening, cooking, games, DIY, learning Japanese 
                            </span>
                        </div>
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
            <button className={styles.aboutTalkButton}>Talk with me</button>
        </div>
    </div>
  )
}

export default About
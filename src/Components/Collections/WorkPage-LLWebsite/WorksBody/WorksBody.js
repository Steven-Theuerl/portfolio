import React from 'react'
import styles from './WorksBody.module.css'

import codeWindow1 from '../../../../assets/Images/LLWebsite/codeWindow1.png'
import codeWindow2 from '../../../../assets/Images/LLWebsite/codeWindow2.png'
import designImage1 from '../../../../assets/Images/LLWebsite/designImage1.png'
import designImage2 from '../../../../assets/Images/LLWebsite/designImage2.png'

const WorksBody = () => {


  return (
    <div className={styles.entireWorksBody}>
        <div className={styles.worksBodyContainer}>
            <div className={styles.worksBodyKeyPointsContainer}>
                <h2 className={styles.worksBodyKeyPointsHeader}>
                    Learned About The Importance of Semantic HTML and SEO
                </h2>
                <p className={styles.worksBodyKeyPointsDescription}>
                    Using the correct tags for elements in HTML facilitate a browser's accurate translation from code to content for browsers, search engines, and ultimatley the end user.
                </p>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                       <span>Correct usage of HTML tags help <b>Assistive Technologies</b> accurately provide content from context to users that have disabilities, making content more accessible content.</span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>Semantic Tags in HTML indicate the <b>role of their content</b> to a search engine and browser. For example, the content in a <b>&#60;h1&#62;</b> tag is read by a search engine as more important to search results than the content in a <b>&#60;p&#62;</b> tag. Ensuring a project has correct tags us crucial for search engine optimization for relavent content.</span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>Using the correct tags standard to web development makes it easier for other developers who understand the semantics to read and contribute to the project, making it easier to <b>collaborate with other developers</b>.</span>
                    </p>
                </div>
            </div>
            <div className={styles.worksBodyCodeWindow1}>
                <img src={codeWindow1} alt='code showing options menu for booking using state' className={styles.worksBodyCodeWindow1Image}/>
            </div>
            <div className={styles.worksBodyKeyPointsContainer}>
                <h2 className={styles.worksBodyKeyPointsHeader}>
                   Learned About React, Components, and How They Function
                </h2>
                <p className={styles.worksBodyKeyPointsDescription}>
                    <span>React is a library that uses JavaScript to build web and native applications. It was developed by Meta &#40;formally Facebook&#41; to make developing reusable and complex UI elements based on the state of that element.</span>
                </p>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                        <p className={styles.worksBodyKeyPointsDetail}>
                            <span>React uses JavaScript XML &#40;JSX&#41;; an optional syntax extension allowing a developer to write <b>HTML-like code in JavaScript</b>.</span>
                        </p>
                    </div>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                        <p className={styles.worksBodyKeyPointsDetail}>
                            <span>Working with modularized components can <b>increase the speed of development</b>, efficacy of unit testing, and ease of general maintenance of the project. Because of these features, React an excellent choice for SPAs, websites, or applications that <b>display changing information on complex UI elements</b>.</span>
                        </p>
                    </div>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                        <p className={styles.worksBodyKeyPointsDetail}>
                            <span>React uses <b>'State'</b> to allow components to <b>manage and update data</b> that can change over time. It allows for more dynamic and interactive components by triggering re-renders when the state changes. By using state effectively, React components can provide a <b>responsive and interactive user experience</b>.</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.worksBodyCodeWindow2}>
                <img src={codeWindow2} alt='code showing more of the booking options functionality' className={styles.worksBodyCodeWindow2Image}/>
            </div>
            <div className={styles.worksBodyKeyPointsContainer}>
                <h2 className={styles.worksBodyKeyPointsHeader}>
                    Learned How to Manage Codebase Using Github
                </h2>
                <p className={styles.worksBodyKeyPointsDescription}>
                    <span>Managing version control with GitHub allows for developers to maintain code quality and history with ease while collaborating effectively on projects with potentially scalable sophistication.</span>
                </p>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>Version control systems like Git keep a <b>detailed history</b> of all changes made to the codebase. Who made the changes, when they were made, what specific changes were implemented, and more is recorded; making it easier to <b>identify bugs and revert to previous versions if needed</b>.</span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>Hosting code on GitHub provides the benefit of its infrastructure and backup systems. This <b>reduces the risk of data loss</b> and ensures that your code is <b>securely stored and accessible</b> from anywhere by anyone with sufficient permissions.</span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>GitHub provides a <b>cooperative environment</b> where multiple developers can work on the same project simultaneously. Contributors can create branches, experiment with changes, and merge their code back into the main branch while avoiding interference between submissions from contributors.</span>
                    </p>
                </div>
            </div>
            <div className={styles.worksBodyDesignImageBox1}>
                    <div className={styles.worksBodyDesignImageContainer1}>
                        <img src={designImage1} alt='display of the websites screens' className={styles.worksBodyDesignImage1}/>
                    </div>
                    <p className={styles.worksBodyDesignImageBoxSubtext}>
                        <span>Figma - Main Screen Wireframe</span>
                    </p>
                </div>
            <div className={styles.worksBodyDesignImageBox2}>
                    <div className={styles.worksBodyDesignImageContainer2}>
                        <img src={designImage2} alt='display of the Figma screens used to create the design of the website' className={styles.worksBodyDesignImage2}/>
                    </div>
                    <p className={styles.worksBodyDesignImageBoxSubtext}>
                        <span>Example Screenshots from App</span>
                    </p>
                </div>
        </div>
    </div>
  )
}

export default WorksBody
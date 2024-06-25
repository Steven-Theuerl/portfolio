import React from 'react'
import styles from './WorksBody.module.css'

import codeWindow1 from '../../../../assets/Images/Portfolio/WorksBodyCodeWindow1Image.png'
import codeWindow2 from '../../../../assets/Images/Portfolio/WorksBodyCodeWindow2Image.png'
import designImage1 from '../../../../assets/Images/Portfolio/worksBodyDesignImage1.png'
import designImage2 from '../../../../assets/Images/Portfolio/worksBodyDesignImage2.png'

const WorksBody = () => {

  return (
    <div className={styles.entireWorksBody}>
        <div className={styles.worksBodyContainer}>
            <div className={styles.worksBodyKeyPointsContainer}>
                <h2 className={styles.worksBodyKeyPointsHeader}>
                    Used Simple Logic to Implement QoL Features
                </h2>
                <p className={styles.worksBodyKeyPointsDescription}>
                     Utilized basic logic to implement some custom features that are simple but effective. In doing so, fewer dependency libraries were needed and my codebase is leaner.
                </p>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span><b>Sliding Menu</b> for mobile views that uses <b>useState()</b> to conditionally show or hide a navigation menu based on state that is controlled through interactions with a button. The Navbar will hide the unordered list once the width of the screen is under 848px and will replace it with a familiar hamburger menu icon to better navigate the website.</span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                       <span><b>Created custom buttons</b> with <b>onClick()</b> attributes that manipulate a custom carousel element specified with an id attribute through the <b>scrollBy()</b> method. These types of scrollable lists are very common in modern sites and applications and can be used to showcase articles, pictures, or other types of content.</span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>
                            <b>Created a working contact page</b> with <b>validation and email</b> functionalities. I did use a few libraries to get this functionality without having to write back-end code. <br/>
                            &#9900; <a href='https://www.npmjs.com/package/@emailjs/browser'><b>Emailjs/browser </b></a>
                            helps you send emails directly from code with one command. No server is required, just connect EmailJS to one of the supported email services, create an email template, and use our SDK to trigger an email. <br/>
                            &#9900; <a href='https://www.npmjs.com/package/react-hook-form'><b>React-Hook-Form </b></a>
                            helps with setting up forms easily and reliably.
                        </span>
                    </p>
                </div>
            </div>
            <div className={styles.worksBodyCodeWindow1}>
                <img src={codeWindow1} alt='code showing how mobile menu works using state' className={styles.worksBodyCodeWindow1Image}/>
            </div>
            <div className={styles.worksBodyKeyPointsContainer}>
                <h2 className={styles.worksBodyKeyPointsHeader}>
                    Working with NPMjs to find new libraries
                </h2>
                <p className={styles.worksBodyKeyPointsDescription}>
                    <span>Node Package Manager allows developers to discover, manage, and install packages, libraries, and dependencies for their projects. Developers can also include a package.json file with their code, which lists the project's dependencies. When another developer clones the project, they can run 'npm install' to quickly install all the required dependencies for the project to work as intended.</span>
                </p>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                        <p className={styles.worksBodyKeyPointsDetail}>
                            <span><b><a href='https://www.npmjs.com/package/react-responsive'>React Responsive</a></b> is one of the most popular libraries for responsive design used with React. It will allow a developer to use conditional media-queries that change the size and format of on-screen elements based on the size of the display.</span>
                        </p>
                    </div>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>
                            <b><a href='https://www.npmjs.com/package/react-router-dom'>React Router Dom</a></b> enables "client side routing." which allows an app to update the URL and page content from clicking a link without making another request from the server. Instead, an app can immediately render some new UI and make data requests with fetch to update the page with new information.
                        </span>
                    </p>
                    </div>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>
                            <a href='https://www.npmjs.com/package/react-lottie'><b>React Lottie</b></a> is a library that can be used for displaying animations on a page from code bundled with an app or pulled from an API. The library also comes with many props for custom looping, speed of the animation, size, event interactions, and more
                        </span>
                    </p>
                    </div>
                </div>
            </div>
            <div className={styles.worksBodyCodeWindow2}>
                <img src={codeWindow2} alt='code window showing how media scrolling carousel works' className={styles.worksBodyCodeWindow2Image}/>
            </div>
            <div className={styles.worksBodyKeyPointsContainer}>
                <h2 className={styles.worksBodyKeyPointsHeader}>
                    Collaborating with UI / UX Designer
                </h2>
                <p className={styles.worksBodyKeyPointsDescription}>
                    <span>Worked with a professional designer to ensure adherence to standard design and styling practices while also defining my project with functional and aesthetic personal touches.</span>
                </p>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>
                            Ensured the project was of a <b>responsive design</b> and styled with influence from trends in <b>modern web development</b> decided by research into other popular front-end developer portfolio examples. All while maintaining an original appearance and approach.
                        </span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>
                            Became familiar with <b>collaboration</b> technologies such as <b>Vercel</b>, <b>Figma</b>, and <b>Docker</b>. Using these helped with faster development by translating information from design to code with integration tools and ease of access to a staging environment for collaborators to verify and provide feedback on progress.
                        </span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>Created an <b>original character</b> inspired by my personal qualities and characteristics to establish a brand identity for the products and services that I will create in the future.</span>
                    </p>
                </div>
            </div>
            <div className={styles.worksBodyDesignImageBox1}>
                <div className={styles.worksBodyDesignImageContainer1}>
                    <img src={designImage1} alt='Figma Design System and files' className={styles.worksBodyDesignImage1}/>
                </div>
                <p className={styles.worksBodyDesignImageBoxSubtext}>
                    <span>Figma - Design files and Design System</span>
                </p>
            </div>
            <div className={styles.worksBodyDesignImageBox2}>
                <div className={styles.worksBodyDesignImageContainer2}>
                    <img src={designImage2} alt='Iterations of the creation of my original character' className={styles.worksBodyDesignImage2}/>
                </div>
                <p className={styles.worksBodyDesignImageBoxSubtext}>
                    <span>Evolution of Original Character</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default WorksBody
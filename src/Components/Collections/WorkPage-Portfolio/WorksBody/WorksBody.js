import React from 'react'
import styles from './WorksBody.module.css'

const WorksBody = () => {


  return (
    <div className={styles.entireWorksBody}>
        <div className={styles.worksBodyContainer}>
            <div className={styles.worksBodyKeyPointsContainer}>
                <span className={styles.worksBodyKeyPointsHeader}>
                    Used Simple Logic to Implement QoL Features
                </span>
                <span className={styles.worksBodyKeyPointsDescription}>
                     Utilized basic logic to implement some custom features that are simple but effective. In doing so, fewer dependency libraries were needed and my codebase is leaner.
                </span>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        <b>Sliding Menu</b> for mobile views that uses <b>useState()</b> to conditionally show or hide a navigation menu based on state that is controlled through interactions with a button. The Navbar will hide the unordered list once the width of the screen is under 848px and will replace it with a familiar hamburger menu icon to better navigate the website.
                    </span>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                       <b>Created custom buttons</b> with <b>onClick()</b> attributes that manipulate a custom carousel element specified with an id attribute through the <b>scrollBy()</b> method. These types of scrollable lists are very common in modern sites and applications and can be used to showcase articles, pictures, or other types of content.
                    </span>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                       <b>Created a working contact page</b> with <b>validation and email</b> functionalities. I did use a few libraries to get this functionality without having to write back-end code. <br/>
                       &#9900; <a href='https://www.npmjs.com/package/@emailjs/browser'><b>Emailjs/browser </b></a>
                       helps you send emails directly from code with one command. No server is required – just connect EmailJS to one of the supported email services, create an email template, and use our SDK to trigger an email. <br/>
                         &#9900; <a href='https://www.npmjs.com/package/react-hook-form'><b>React-Hook-Form </b></a>
                         helps with setting up forms easliy and reliably. <br/>
                    </span>
                </div>
            </div>
            <div className={styles.worksBodyCodeWindow1}>
                <div className={styles.worksBodyCodeWindow1Image}/>
            </div>
            <div className={styles.worksBodyKeyPointsContainer}>
                <span className={styles.worksBodyKeyPointsHeader}>
                    Working with NPMjs to find new libraries
                </span>
                <span className={styles.worksBodyKeyPointsDescription}>
                    Node Package Manager allows developers to discover, manage, and install packages, libraries, and dependencies for their projects. Developers can also include a package.json file with their code, which lists the project's dependencies. When another developer clones the project, they can run 'npm install' to quickly install all the required dependencies for the project to work as intended.
                </span>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        <b><a href='https://www.npmjs.com/package/react-responsive'>React Responsive</a></b> is one of the most popular libraries for responsive design used with React. It will allow a developer to use conditional media-queries that change the size and format of on-screen elements based on the size of the display.  <br/>
                    </span>
                    </div>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                    <span className={styles.worksBodyKeyPointsDetail}>
                    <b><a href='https://www.npmjs.com/package/react-router-dom'>React Router Dom</a></b> enables "client side routing." which allows an app to update the URL and page content from clicking a link without making another request from the server. Instead, an app can immediately render some new UI and make data requests with fetch to update the page with new information.
                    </span>
                    </div>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        <a href='https://www.npmjs.com/package/react-lottie'><b>React Lottie</b></a> is a library that can be used for displaying animations on a page from code bundled with an app or pulled from an API. The library also comes with many props for custom looping, speed of the animation, size, event interactions, and more<br/>
                    </span>
                    </div>
                </div>
            </div>
            <div className={styles.worksBodyCodeWindow2}>
                <div className={styles.worksBodyCodeWindow2Image}/>
            </div>
            <div className={styles.worksBodyKeyPointsContainer}>
                <span className={styles.worksBodyKeyPointsHeader}>
                    Collaborating with UI / UX Desginer
                </span>
                <span className={styles.worksBodyKeyPointsDescription}>
                    Worked with a professional designer to ensure adherence to standard design and styling practices while also defining my project with functional and aesthectic personal touches. 
                </span>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        Ensured the project was of a <b>responsive design</b> and styled with influence from trends in <b>modern web development</b> deduced by research into other popular front-end developer portfolio examples while maintaining an original appearance and approach.
                    </span>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        Became familiar with <b>collaboration</b> technologies such as <b>Vercel</b>, <b>Figma</b>, and <b>Docker</b>. Using these helped with faster development by translating information from deisgn to code with integration tools and ease of access to a staging environment for collaborators to verify and provide feedback on progress.
                    </span>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        Created an <b>original character</b> inspired by my personal qualities and characteristics to create a brand identity for the products and services that I will create.
                    </span>
                </div>
            </div>
            <div className={styles.worksBodyDesignImageBox1}>
                    <div className={styles.worksBodyDesignImageContainer1}>
                        <div className={styles.worksBodyDesignImage1}/>
                    </div>
                    <div className={styles.worksBodyDesignImageBoxSubtext}>
                        <span>Figma - Design files and Design System</span>
                    </div>
                </div>
            <div className={styles.worksBodyDesignImageBox2}>
                    <div className={styles.worksBodyDesignImageContainer2}>
                        <div className={styles.worksBodyDesignImage2}/>
                    </div>
                    <div className={styles.worksBodyDesignImageBoxSubtext}>
                        <span>Evolution of Original Character</span>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default WorksBody
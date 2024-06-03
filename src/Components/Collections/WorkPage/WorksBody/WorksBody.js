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
                     Utilized basic logic to implement custom features that are simple but effective. In doing so, fewer dependency libraries were needed and my codebase is leaner.
                </span>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        <b>Sliding Menu</b> for mobile views that uses <b>useState()</b> to conditionally show or hide a navigation menu based on state that is controlled through interactions with a button.
                    </span>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        <b>React screens and Routing</b> : code snippit here
                    </span>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                       <b>Created custom buttons</b> with <b>onClick()</b> attributes that manipulate a custom carousel element specified with an id attribute through the <b>scrollBy()</b> method.
                    </span>
                </div>
            </div>
            <div className={styles.worksBodyCodeWindow}>
                <div className={styles.worksBodyCodeWindow1Image}/>
            {/*
               <pre>
                    <code>  const [nav,setNav] = useState(false)</code><br/>
                    <code>      &#60;div className=&#123;styles.navBar&#125;&#62; </code> <br/>
                    <code>          &#60;button className=&#123;styles.button&#125;</code> <br/>
                    <code>                  onClick=&#123;() =&#62; setNav(!nav)&#125;&#62;</code> <br/>
                    <code>          &#60;/button&#62;</code> <br/>
                    <code>      &#60;/div&#62;</code> <br/>
                    <code>      &#60;div className=&#123;nav? [styles.slidingMenu] : [styles.slidingMenuOffset]&#125;&#62;</code> <br/>
                    <code>           ...   <br/>      &#60;/div&#62;</code> <br/>
                    <code><br/></code>
                    <code>  //Setting the useState as false initially, and tying its value to a "set"  <br/>  function that changes it's value to the opposite Boolean when the button <br/>  is clicked. </code>
                </pre>
            */}
            </div>
            <div className={styles.worksBodyKeyPointsContainer}>
                <span className={styles.worksBodyKeyPointsHeader}>
                    Working with NPMjs to find new libraries
                </span>
                <span className={styles.worksBodyKeyPointsDescription}>
                    Working with NPMjs to find unfamiliar libraries and utilize them for implementing complicated features that I wanted for my project.
                </span>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        <b>react-responsive</b> : to use conditional hooks and component displays based on a query for the screen size <br/>
                        <a className={styles.worksBodyAnchor} href='https://www.npmjs.com/package/react-responsive'>https://www.npmjs.com/package/react-responsive</a>
                    </span>
                    </div>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                    <span className={styles.worksBodyKeyPointsDetail}>
                    <b>react-anchor-link-smooth-scroll</b> : to have in-page scrolling <br/>
                        <a className={styles.worksBodyAnchor} href='https://www.npmjs.com/package/react-anchor-link-smooth-scroll'>https://www.npmjs.com/package/react-anchor-link-smooth-scroll</a>
                    </span>
                    </div>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                    <span className={styles.worksBodyKeyPointsDetail}>
                    <b>react-router-dom</b> : to show different “Screens” based on links clicked <br/>
                        <a className={styles.worksBodyAnchor} href='https://www.npmjs.com/package/react-router-dom'>https://www.npmjs.com/package/react-router-dom</a>
                    </span>
                    </div>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        <b>react-lottie</b> : for JSON animation data being displayed on page <br/>
                        <a className={styles.worksBodyAnchor} href='https://www.npmjs.com/package/react-lottie'>https://www.npmjs.com/package/react-lottie</a>
                    </span>
                    </div>
                </div>
            </div>
            <div className={styles.worksBodyCodeWindow}>
                <div className={styles.worksBodyCodeWindow2Image}/>
            {/*
               <pre>
                    <code>  const [nav,setNav] = useState(false)</code><br/>
                    <code>      &#60;div className=&#123;styles.navBar&#125;&#62; </code> <br/>
                    <code>          &#60;button className=&#123;styles.button&#125;</code> <br/>
                    <code>                  onClick=&#123;() =&#62; setNav(!nav)&#125;&#62;</code> <br/>
                    <code>          &#60;/button&#62;</code> <br/>
                    <code>      &#60;/div&#62;</code> <br/>
                    <code>      &#60;div className=&#123;nav? [styles.slidingMenu] : [styles.slidingMenuOffset]&#125;&#62;</code> <br/>
                    <code>           ...   <br/>      &#60;/div&#62;</code> <br/>
                    <code><br/></code>
                    <code>  //Setting the useState as false initially, and tying its value to a "set"  <br/>  function that changes it's value to the opposite Boolean when the button <br/>  is clicked. </code>
                </pre>
            */}
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
                    <b>Gathered research</b> and information about other Front end dev portfolios
                    </span>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        Ensured the project was of a <b>responsive design</b> and styled with influence from trends in <br/><b>modern web development</b>.
                    </span>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        Became familiar with <b>collaboration</b> technologies such as <b>Vercel</b>, <b>Figma</b>, and <b>Docker</b>.
                    </span>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        Created an <b>original character</b> inspired by my personal qualities and characteristics. 
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
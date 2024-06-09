import React from 'react'
import styles from './WorksBody.module.css'

const WorksBody = () => {


  return (
    <div className={styles.entireWorksBody}>
        <div className={styles.worksBodyContainer}>
            <div className={styles.worksBodyKeyPointsContainer}>
                <span className={styles.worksBodyKeyPointsHeader}>
                    Learned about and Used React Native and ExpoGo to Make a 'Native' Cross-Platform Application
                </span>
                <span className={styles.worksBodyKeyPointsDescription}>
                     An application written using React Native can be displayed on mobile devices as intended with fully functioning features to a native experience. The application is written in JavaScript and then rendered to the native platfrom UI.
                </span>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        Apps on <b>different platforms share the same codebase </b>as React Native is written only with JavaScript and JSX.
                    </span>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                    <b>Over the Air Updates </b> can enable developers to push small changes or updates directly to users of the application, which can circumvent waits for Play Store and App Store approval to re-distribute the app.
                    </span>
                </div>
            </div>
            <div className={styles.worksBodyCodeWindow1}>
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
                   Used Modern Tools and Libraries for Mobile Development
                </span>
                <span className={styles.worksBodyKeyPointsDescription}>
                    With React Native and JSX along with some common libraries, I implemented features that are commonly used in mobile development.
                </span>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        Set up an <b>authentication and navigation flow</b> to enable users to sign in and move between screens.
                    </span>
                    </div>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        <b>Fetched</b> data from a remote server, <b>stored</b> it in a locally created database, and then <b>rendered</b> it in the application.
                    </span>
                    </div>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        Implemented a data <b>filtering functionality</b> to enable users to search for and display customized information
                    </span>
                    </div>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                        <span className={styles.worksBodyKeyPointsDetail}>
                        Some new <b>tools and technologies</b> that I learned about and used for this project: <br/>
                        &#9900; <a href='https://reactnative.dev/docs/asyncstorage'><b>AsyncStorage </b></a>
                         is an unencrypted, asynchronous, persistent, key-value storage system that is global to an app. <br/>
                         &#9900; <a href='https://docs.expo.dev/'><b>Expo Go</b></a> is a sandbox that enables a developer to quickly experiment with building native Android and iOS apps.<br/>
                         &#9900; <a href='https://docs.expo.dev/versions/latest/sdk/sqlite/'><b>Expo-SQLite</b></a> gives an app access to a database that can be queried through a SQLite API. The database is persisted across restarts of your app.
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.worksBodyCodeWindow2}>
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
                    Created a Design Adhering to a Style Guide and Feature Requirements
                </span>
                <span className={styles.worksBodyKeyPointsDescription}>
                    Used Figma to create a basic wireframe of app screens before development. 
                </span>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                         <b>Applied UX and UI principles</b> to create a wireframe and prototype for an app.
                    </span>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        Developed designed screens for a <b>React Native app</b> featuring various custom and core components and interactive elements.
                    </span>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <span className={styles.worksBodyKeyPointsDetail}>
                        <b>Designed an onboarding process</b> for welcoming new users to the application.
                    </span>
                </div>
            </div>
            <div className={styles.worksBodyDesignImageBox1}>
                    <div className={styles.worksBodyDesignImageContainer1}>
                        <div className={styles.worksBodyDesignImage1}/>
                    </div>
                    <div className={styles.worksBodyDesignImageBoxSubtext}>
                        <span>Figma - Main Screen Wireframe</span>
                    </div>
                </div>
            <div className={styles.worksBodyDesignImageBox2}>
                    <div className={styles.worksBodyDesignImageContainer2}>
                        <div className={styles.worksBodyDesignImage2}/>
                    </div>
                    <div className={styles.worksBodyDesignImageBoxSubtext}>
                        <span>Example Screenshots from App</span>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default WorksBody
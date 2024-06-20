import React from 'react'
import styles from './WorksBody.module.css'

const WorksBody = () => {


  return (
    <div className={styles.entireWorksBody}>
        <div className={styles.worksBodyContainer}>
            <div className={styles.worksBodyKeyPointsContainer}>
                <h2 className={styles.worksBodyKeyPointsHeader}>
                    Learned about and Used React Native and ExpoGo to Make a 'Native' Cross-Platform Application
                </h2>
                <p className={styles.worksBodyKeyPointsDescription}>
                     An application written using React Native is displayed on mobile devices as intended with fully functioning features to a native experience. The application is written with React using JavaScript and then rendered to the native platfrom UI.
                </p>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>Apps on <b>different platforms share the same codebase </b>as React Native is written only with JavaScript and JSX.</span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                    <span><b>Over the Air Updates </b> can enable developers to push small changes or updates directly to users of the application, which can circumvent waits for Play Store and App Store approval to re-distribute the app.</span>
                    </p>
                </div>
            </div>
            <div className={styles.worksBodyCodeWindow1}>
                <div className={styles.worksBodyCodeWindow1Image}/>
            </div>
            <div className={styles.worksBodyKeyPointsContainer}>
                <h2 className={styles.worksBodyKeyPointsHeader}>
                   Used Modern Tools and Libraries for Mobile Development
                </h2>
                <p className={styles.worksBodyKeyPointsDescription}>
                    Utilizing React Native and JSX along with some commonly used libraries and lots of documentation, I implemented features that are frequently used in mobile development.
                </p>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                        <p className={styles.worksBodyKeyPointsDetail}>
                            <span>Set up an <b>authentication and navigation flow</b> to enable users to interact with an onboarding screen, sign into an account, retain persistant data locally to prevent multiple onboarding phases on app restarts, and movement between screens.</span>
                        </p>
                    </div>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <div className={styles.worksBodyKeyPointsDetailAndAnchorContainer}>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>Implemented a data <b>filtering functionality</b> to enable users to search for and display customized information</span>
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
                                Some new <b>tools and technologies</b> that I learned about and used for this project: <br/>
                                &#9900; <a href='https://reactnative.dev/docs/asyncstorage'><b>AsyncStorage </b></a>
                                is an unencrypted, asynchronous, persistent, key-value storage system that is global to an app. <br/>
                                &#9900; <a href='https://docs.expo.dev/'><b>Expo Go</b></a> is a sandbox that enables a developer to quickly experiment with building native Android and iOS apps.<br/>
                                &#9900; <a href='https://docs.expo.dev/versions/latest/sdk/sqlite/'><b>Expo-SQLite</b></a> gives an app access to a database that can be queried through a SQLite API. The database is persisted across restarts of your app.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.worksBodyCodeWindow2}>
                <div className={styles.worksBodyCodeWindow2Image}/>
            </div>
            <div className={styles.worksBodyKeyPointsContainer}>
                <h2 className={styles.worksBodyKeyPointsHeader}>
                    Created a Design Adhering to a Style Guide and Feature Requirements
                </h2>
                <p className={styles.worksBodyKeyPointsDescription}>
                    <span>Used Figma to create a basic wireframe of app screens before development. This gave me a clear plan of how to start with development, structure elements and components, and order screens shown in the user experience.</span>
                </p>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span><b>Applied User Experience &#40;UX&#41; and User Interface &#40;UI&#41; principles</b> to create a wireframe and prototype for an app with the expereince for the user as the primary consideration during planning.</span>
                    </p>
                </div>
                <div className={styles.worksBodyKeyPointsDetailContainer}>
                    <div className={styles.worksBodyKeyPointsDetailBulletContainer}>
                        <div className={styles.worksBodyKeyPointsDetailBullet}/>
                    </div>
                    <p className={styles.worksBodyKeyPointsDetail}>
                        <span>Designed an onboarding process and developed screens for a <b>React Native app</b> from the figma data utilizing a variety of custom and core components and interactive elements.</span>
                    </p>
                </div>
            </div>
            <div className={styles.worksBodyDesignImageBox1}>
                    <div className={styles.worksBodyDesignImageContainer1}>
                        <div className={styles.worksBodyDesignImage1}/>
                    </div>
                    <div className={styles.worksBodyDesignImageBoxSubtext}>
                        <p>Figma - Main Screen Wireframe</p>
                    </div>
                </div>
            <div className={styles.worksBodyDesignImageBox2}>
                    <div className={styles.worksBodyDesignImageContainer2}>
                        <div className={styles.worksBodyDesignImage2}/>
                    </div>
                    <div className={styles.worksBodyDesignImageBoxSubtext}>
                        <p>Example Screenshots from App</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default WorksBody
import React from 'react'
import styles from './WorksHeader.module.css'

const WorksHeader = () => {
  return (
    <div className={styles.entireWorksAbout}>
        <div className={styles.worksHeaderContainer}>
            <div className={styles.worksHeaderTopContainer}>
                <div className={styles.tag}><span>Website</span></div>
                <div className={styles.projectTitle}><span >My Portfolio</span></div>
                <div  className={styles.projectDescription}>
                    <span>
                    Thank you, you're looking at my portfolio right now. Not only is it simple and the content is easy to read, but it also shows what makes me unique.
                    </span>
                </div>
                <div className={styles.projectVisitButtonContainer}>
                    <button className={styles.projectVisitButton}>
                    Visit this website
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.64645 10.6464C2.45118 10.8417 2.45118 11.1583 2.64645 11.3536C2.84171 11.5488 3.15829 11.5488 3.35355 11.3536L2.64645 10.6464ZM9.86396 4.63604C9.86396 4.3599 9.6401 4.13604 9.36396 4.13604L4.86396 4.13604C4.58782 4.13604 4.36396 4.3599 4.36396 4.63604C4.36396 4.91218 4.58782 5.13604 4.86396 5.13604L8.86396 5.13604L8.86396 9.13604C8.86396 9.41218 9.08782 9.63604 9.36396 9.63604C9.6401 9.63604 9.86396 9.41218 9.86396 9.13604L9.86396 4.63604ZM3.35355 11.3536L9.71751 4.98959L9.01041 4.28249L2.64645 10.6464L3.35355 11.3536Z" fill="green"/>
                    </svg>
                    </button>
                </div>
            </div>
            <div className={styles.worksHeaderBottomContainer}>
               <div className={styles.workHeaderDetailsContainer}>
                    <div className={styles.workDetailsImagesContainer}>
                        <svg className={styles.workDetailsImages} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.25 3H11.115C10.8 2.13 9.975 1.5 9 1.5C8.025 1.5 7.2 2.13 6.885 3H3.75C2.925 3 2.25 3.675 2.25 4.5V15C2.25 15.825 2.925 16.5 3.75 16.5H14.25C15.075 16.5 15.75 15.825 15.75 15V4.5C15.75 3.675 15.075 3 14.25 3ZM9 2.8125C9.165 2.8125 9.3075 2.8875 9.4125 3C9.5025 3.0975 9.5625 3.2325 9.5625 3.375C9.5625 3.6825 9.3075 3.9375 9 3.9375C8.6925 3.9375 8.4375 3.6825 8.4375 3.375C8.4375 3.2325 8.4975 3.0975 8.5875 3C8.6925 2.8875 8.835 2.8125 9 2.8125ZM14.25 15H3.75V4.5H14.25V15ZM9 5.25C7.7625 5.25 6.75 6.2625 6.75 7.5C6.75 8.7375 7.7625 9.75 9 9.75C10.2375 9.75 11.25 8.7375 11.25 7.5C11.25 6.2625 10.2375 5.25 9 5.25ZM9 8.25C8.5875 8.25 8.25 7.9125 8.25 7.5C8.25 7.0875 8.5875 6.75 9 6.75C9.4125 6.75 9.75 7.0875 9.75 7.5C9.75 7.9125 9.4125 8.25 9 8.25ZM4.5 13.1025V14.25H13.5V13.1025C13.5 11.2275 10.5225 10.4175 9 10.4175C7.4775 10.4175 4.5 11.22 4.5 13.1025ZM6.2325 12.75C6.75 12.33 8.0175 11.91 9 11.91C9.9825 11.91 11.2575 12.33 11.7675 12.75H6.2325Z" fill="#8D8D8D"/>
                        </svg>
                    </div>
                    <div className={styles.workDetailsType}>Roles</div>
                    <span className={styles.workDetailsDetails}>Front-end engineering</span>
               </div>
               <div className={styles.workHeaderDetailsContainer}>
                    <div className={styles.workDetailsImagesContainer}>
                    <svg className={styles.workDetailsImages}width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.25 3H13.5V1.5H12V3H6V1.5H4.5V3H3.75C2.9175 3 2.25 3.675 2.25 4.5V15C2.25 15.825 2.9175 16.5 3.75 16.5H14.25C15.075 16.5 15.75 15.825 15.75 15V4.5C15.75 3.675 15.075 3 14.25 3ZM14.25 15H3.75V7.5H14.25V15ZM14.25 6H3.75V4.5H14.25V6ZM5.25 9H9V12.75H5.25V9Z" fill="#8D8D8D"/>
                    </svg>
                    </div>
                    <div className={styles.workDetailsType}>Duration</div>
                    <span className={styles.workDetailsDetails}>May 2024 - June 2024</span>
               </div>
               <div className={styles.workHeaderDetailsContainer}>
                    <div className={styles.workDetailsImagesContainer}>
                    <svg className={styles.workDetailsImages}width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7.125V5.625C15 4.8 14.325 4.125 13.5 4.125H11.25C11.25 2.88 10.245 1.875 9 1.875C7.755 1.875 6.75 2.88 6.75 4.125H4.5C3.675 4.125 3 4.8 3 5.625V7.125C1.755 7.125 0.75 8.13 0.75 9.375C0.75 10.62 1.755 11.625 3 11.625V14.625C3 15.45 3.675 16.125 4.5 16.125H13.5C14.325 16.125 15 15.45 15 14.625V11.625C16.245 11.625 17.25 10.62 17.25 9.375C17.25 8.13 16.245 7.125 15 7.125ZM13.5 14.625H4.5V5.625H13.5V14.625ZM6.75 10.125C6.1275 10.125 5.625 9.6225 5.625 9C5.625 8.3775 6.1275 7.875 6.75 7.875C7.3725 7.875 7.875 8.3775 7.875 9C7.875 9.6225 7.3725 10.125 6.75 10.125ZM12.375 9C12.375 9.6225 11.8725 10.125 11.25 10.125C10.6275 10.125 10.125 9.6225 10.125 9C10.125 8.3775 10.6275 7.875 11.25 7.875C11.8725 7.875 12.375 8.3775 12.375 9ZM6 11.625H12V13.125H6V11.625Z" fill="#8D8D8D"/>
                    </svg>
                    </div>
                    <div className={styles.workDetailsType}>Tools</div>
                    <span className={styles.workDetailsDetails}>React, Next js, HTML, css</span>
               </div>
            </div>
        </div>
    </div>
  )
}

export default WorksHeader
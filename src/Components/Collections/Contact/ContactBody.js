import React from 'react'

import styles from './ContactBody.module.css'

const ContactBody = () => {
  return (
    <div className={styles.entireContactBody}>
        <div className={styles.contactBodyContainer}>
            <div className={styles.contactHeader}>
                Contact
            </div>
            <div className={styles.contactSubHeaderContainer}>
                <div className={styles.contactSubHeaderTop}>
                    I'd love to hear from you!
                </div>
                <div className={styles.contactSubHeaderBottom}>
                    If you'd like to leave me a message, please use the contact form below
                    or email me on <a className={styles.contactPageAnchor}href='https://www.gmail.com'>mr.steven.theuerl@gmail.com</a>
                </div>
            </div>
            <form className={styles.contactFormContainer}>
               <div className={styles.contactEntireTopInputsContainer}>
                    <div className={styles.contactInputContainer}>
                        <div className={styles.contactInputLabel}>
                            Your Name *
                        </div>
                        <input className={styles.contactInputField}
                                placeholder='Your Name'/>
                        <div className={styles.contactInputSeperator}/>
                    </div>
                    <div className={styles.contactInputContainer}>
                        <div className={styles.contactInputLabel}>
                            Your Email *
                        </div>
                        <input className={styles.contactInputField}
                                placeholder='example@example.com'/>
                        <div className={styles.contactInputSeperator}/>
                    </div>
               </div>
               <div className={styles.contactMessageContainer}>
                        <div className={styles.contactInputLabel}>
                            Your Message *
                        </div>
                        <textarea className={styles.contactMessgageInputField}
                                placeholder='Your Message'
                                />
                        <div className={styles.contactMessageSeperator}/>
                    </div>
            </form>
            <button className={styles.sendButton}>
                Send Message
            </button>
        </div>
    </div>
  )
}

export default ContactBody
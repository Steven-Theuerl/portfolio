import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import  emailjs  from '@emailjs/browser'
import { Link } from 'react-router-dom'

import styles from './ContactBody.module.css'

const ContactBody = () => {

const [contacted, setContacted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm()

    const onSubmit = async (data) => {
            const { name, email, message } = data
            try {
                const templateParams = {
                    name,
                    email,
                    message
                };
            await emailjs.send(
                'service_5ewbxth',
                'template_4c1eiib',
                templateParams,
                {
                    publicKey: 'E7LD0XMGxvSZZ0bDA',
                },
            ).then(setContacted(!contacted));
            } catch(e) {
                console.log(e)
                }
        }

  return (
    <div className={styles.entireForm}
         id="entireForm">
    {contacted ? [
        <div className={styles.entireContactedBody}>
            <div className={styles.contactedBodyContainer}>
                <h2 className={styles.contactedHeader}>
                    Thank you!
                </h2>
                <p className={styles.contactedBody}>
                    Thank you for contacting me. <br/>
                    I will reply to the email address you provided.
                </p>
                <div className={styles.contactedHomeButtonContainer}>
                    <Link to='/' reloadDocument>
                        <button className={styles.contactedHomeButton}>
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        ] : [<div className={styles.entireContactBody}>
        <div className={styles.contactBodyContainer}>
           <h1 className={styles.contactHeader}>
                Contact
            </h1>
            <div className={styles.contactSubHeaderContainer}>
                <p className={styles.contactSubHeaderTop}>
                    I'd love to hear from you!
                </p>
                <p className={styles.contactSubHeaderBottom}>
                    <span>If you'd like to leave me a message, please use the contact form below
                    or email me at <a className={styles.contactPageAnchor} href='mailto:mr.steven.theuerl@gmail.com'>mr.steven.theuerl@gmail.com</a></span>
                </p>
            </div>
            <form className={styles.contactFormContainer}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate>
               <div className={styles.contactEntireTopInputsContainer}>
                    <div className={styles.contactInputContainer}>
                        <h3 className={styles.contactInputLabel}>
                            Your Name *
                        </h3>
                        <input className={styles.contactInputField}
                                placeholder='Your Name'
                                type='text'
                                name='name'
                                {...register('name', {
                                    required: {value: true, message: 'Please enter your name.'},
                                    maxLength: {
                                        value: 30,
                                        message: 'Please use 30 characters or less.'
                                    }
                                })}
                        />
                        <div className={styles.contactInputSeperator}/>
                        {errors.name && (<span className={styles.errorMessage}>{errors.name.message}</span>)}
                    </div>
                    <div className={styles.contactInputContainer}>
                        <h3 className={styles.contactInputLabel}>
                            Your Email Address *
                        </h3>
                        <input className={styles.contactInputField}
                                placeholder='example@example.com'
                                type='text'
                                name='email'
                                {...register('email', {
                                    required: {value: true, message: 'Please enter your email address.'},
                                    pattern: 
                                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    minLength: {
                                        value: 10,
                                        message: 'Please enter a valid email address.'
                                    }
                                })}
                        />
                        <div className={styles.contactInputSeperator}/>
                        {errors.email && (<span className={styles.errorMessage}>{errors.email.message}</span>)}
                    </div>
               </div>
               <div className={styles.contactMessageContainer}>
                        <h3 className={styles.contactInputLabel}>
                            Your Message *
                        </h3>
                        <textarea className={styles.contactMessgageInputField}
                                  placeholder='Your Message'
                                  {...register('message', {
                                    required: true
                                  })}
                        />
                        <div className={styles.contactMessageSeperator}/>
                        {errors.message && <span className={styles.errorMessage}>Please enter a message</span>}
                </div>
                 <button className={styles.sendButton}
                    type='submit'>
                    Send Message
                </button>
            </form>
        </div>
    </div>] }
    </div>
  )
}

export default ContactBody
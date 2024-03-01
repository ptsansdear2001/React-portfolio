import React from 'react'
import styles from './Contect.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'
function Contact() {
    return (
        <div className={styles.contact_wrapper}>
            <div className={styles.contact_con}>
                <div className={styles.contact_info}>
                    <h3>Get in touch</h3>
                    <p className={styles.contact_desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati error minus deserunt tempore fugiat?
                        Ipsum dolore incidunt
                        quod nam dolores nemo illo unde, reprehenderit modi corrupti iste nesciunt quam neque?
                    </p>
                    <p>
                        123 Main Street <br />
                        Bangkok, Thailand
                    </p>
                    <p><FaPhone />(+66) 87 886 0001</p>
                    <p><FaEnvelope />ptsansdear2001@gmail.com</p>
                </div>
                <div className={styles.contact_form}>
                    <form action="">
                        <div className={styles.input_group}>
                            <div>
                                <label htmlFor="first name">First name</label>
                                <input type="text" placeholder='eg. Pattarasorn' />
                            </div>
                            <div>
                                <label htmlFor="last name">Last name</label>
                                <input type="text" placeholder='eg. Sae Law' />
                            </div>
                        </div>
                        <label htmlFor="email address">Email Address</label>
                        <input type="email" placeholder='eg. pattarasorn@gmail.com' />
                        <label htmlFor="message">Your message</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Type here'></textarea>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact
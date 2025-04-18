import React from 'react'
import styles from './Contact.module.css';
import emailicon from './emailIcon.png';
import linkedinicon from './linkedinIcon.png';
import githubicon from './githubIcon.png'
const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
       <div className={styles.text}>
        <h2 className={styles.title}> ! Collaborate With Me  ! </h2>
        {/* <p className={styles.content}> Feel free to contact me</p> */}
       </div>
       <ul className={styles.links}>
        <li className={styles.link}>
           
            <a href='mailto:kondavetitarunkumar.22.it@anits.edu.in'> <img 
            src={emailicon}
            alt='Email'
            >
            </img></a>
        </li>
        <li className={styles.link}>
            
            <a href='https://www.linkedin.com/in/tarunkumar931?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsXLxzR4UTJKxVGBakCsQrQ%3D%3D'>
            <img 
            src={linkedinicon}
            alt='linkedin'
            >
            </img>
            </a>
        </li>
        <li className={styles.link}>
            
            <a href='https://github.com/Tarun-kondaveti'><img 
            src={githubicon}
            alt='github'
            >
            </img></a>
        </li>
       </ul>
    </footer>
  )
}

export default Contact
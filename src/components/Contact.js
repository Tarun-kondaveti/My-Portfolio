import React from 'react'
import styles from './Contact.module.css';
import emailicon from './emailIcon.png';
import linkedinicon from './linkedinIcon.png';
import githubicon from './githubIcon.png'
const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
       <div className={styles.text}>
        <h2 className={styles.title}> Contact</h2>
        {/* <p className={styles.content}> Feel free to contact me</p> */}
       </div>
       <ul className={styles.links}>
        <li className={styles.link}>
            <img 
            src={emailicon}
            alt='Email'
            >
            </img>
            <a href='mailto:kondavetitarunkumar.22.it@anits.edu.in'>kondavetitarunkumar.22.it@anits.edu.in</a>
        </li>
        <li className={styles.link}>
            <img 
            src={linkedinicon}
            alt='linkedin'
            >
            </img>
            <a href='https://www.linkedin.com/in/tarunkumar931?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsXLxzR4UTJKxVGBakCsQrQ%3D%3D'>
            linkedin.com/in/tarunkumar931
            </a>
        </li>
        <li className={styles.link}>
            <img 
            src={githubicon}
            alt='github'
            >
            </img>
            <a href='https://github.com/Tarun-kondaveti'>github.com/Tarun-kondaveti</a>
        </li>
       </ul>
    </footer>
  )
}

export default Contact
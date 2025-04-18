import React from 'react';
import styles from './About.module.css'; // Importing CSS module
import aboutimage from './aboutimage.jpeg';
const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutimage}
          alt='about me '
          className={styles.image}
        />
        <ul className={styles.items}>
          <li className={styles.item}>
            <div className={styles.aboutitemtext}>
              <h3>MERN STACK DEVELOPER </h3>
              <p>
              As a frontend developer, I specialize in creating intuitive and dynamic user interfaces. My experience is demonstrated through the various projects I’ve built, where I’ve applied technologies such as HTML, CSS, JavaScript, and React to deliver responsive and visually appealing web applications. I'm passionate about crafting seamless user experiences and ensuring the performance and accessibility of each project.
               </p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.aboutitemtext}>
              <h3>Java</h3>
              <p>
              Java has always been a language that fuels my passion for coding. Its versatility and robustness challenge me to think critically and solve complex problems efficiently. My enthusiasm for Java is reflected in my ability to write clean, efficient code while leveraging the power of object-oriented programming to build scalable and maintainable solutions.
               </p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.aboutitemtext}>
              <h3>MySQL</h3>
              <p>
              Understanding the importance of database management is crucial for any developer. MySQL has been a key tool in my skill set, providing me with foundational knowledge of database connectivity and management. I’ve worked with MySQL to design, manage, and query databases, ensuring that the data layer of my applications is as reliable as the user-facing components.

</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;

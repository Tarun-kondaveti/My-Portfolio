/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import image from './image.jpg';
import styles from './Hero.module.css'; // Importing CSS module

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.typing}>Hi, I'm Tarun Kumar</span>
        </h1>
        <p className={styles.description}>
          Student at Anil Neerukonda Institute of Technology and Sciences,
        </p>
        <p className={styles.description}>
          Frontend Web Developer || Code with Java
        </p>
        <p className={styles.description}>
          Welcome to My Portfolio. Here you can explore about me and  my skills, and some of my projects.
        </p>
        
        <p className={styles.description}>
          Hope you like this!
        </p>
        <a className={styles.contact} href="mailto:kondavetitarunkumar.22.it@anits.edu.in">
          Contact Me
        </a>
      </div>
      <img 
        className={styles.myimage} 
        src={image} 
        alt='My Image' 
        height={250} 
        width={250}
      />
      <div className={styles.topblur}></div>
      <div className={styles.bottomblur}></div>
    </section>
  );
}

export default Hero;

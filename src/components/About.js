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
              I'm a passionate MERN Stack Developer skilled in building scalable, full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I’ve developed several impactful projects, including:
              <br></br>

🔹 AI Mock Interview App (Next.js) – A smart application that simulates real-time technical interviews using AI and natural language processing to assess and guide users.
<br></br>
🔹 Carbon Emmision Neutralizer – A carbon footprint analytics platform that visualizes emissions and provides actionable afforestation-based solutions to move toward carbon neutrality.
<br></br>
My experience includes RESTful API design, frontend UI/UX development, state management using Redux/Context API, and deploying applications using Vercel and Render. I'm also well-versed in authentication (JWT, OAuth), and MongoDB schema design. 
               </p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.aboutitemtext}>
              <h3>Java</h3>
              <p>
              I have a strong foundation in Java programming, especially in Data Structures and Algorithms. My problem-solving approach is driven by clean code, time complexity analysis, and optimization. I've solved problems across platforms like LeetCode, HackerRank, and GFG, covering:
<br></br>
🔹 Arrays, Strings, Linked Lists, Trees, Graphs
<br></br>
🔹  Dynamic Programming, Recursion, Greedy Techniques
<br></br>
🔹  Sliding Window, Two Pointers, Binary Search
<br></br>
This practice has enhanced my analytical thinking and helped me crack competitive coding challenges and technical interviews.               </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;

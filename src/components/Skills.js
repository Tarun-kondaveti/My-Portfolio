import React from 'react';
import styles from './Skills.module.css';
import skillsData from '../data/skills.json';
import CircularProgress from './CircularProgress'; // We will build this below

const Skills = () => {
  // Professional skills data
  const professionalSkills = [
    { title: 'Creativity', percentage: 75 },
    { title: 'Communication', percentage: 85 },
    { title: 'Problem Solving', percentage: 70 },
    { title: 'Team Work', percentage: 85 },
    { title: 'Leadership', percentage: 75 }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.heading}> <span className={styles.highlight}>Skills</span></h2>
      <div className={styles.container}>
        {/* Technical Skills Section */}
        <div className={styles.technicalSkills}>
          <h3 className={styles.skillname}>Technical Skills</h3>
          {skillsData.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <img src={skill.imageSrc} alt={skill.title} className={styles.skillIcon} />
              <span>{skill.title}</span>
              <div className={styles.progress}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${skill.percentage}%` }}
                >
                  <span className={styles.percentage}>{skill.percentage}%</span>
                </div> 
              </div>
            </div>
          ))}
        </div>

        {/* Professional Skills Section */}
        <div className={styles.professionalSkills}>
          <h3 className={styles.skillname}>Professional Skills</h3>
          <div className={styles.circularSkills}>
            {professionalSkills.map((skill, index) => (
              <CircularProgress key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react'
import styles from './Projects.module.css';
import projects from '../data/projects.json';
import ProjectItem from './projectItem'; // Capitalized component name

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectItem key={id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

import React from 'react';
import styles from './CircularProgress.module.css';

const CircularProgress = ({ skill }) => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill.percentage / 100) * circumference;

  return (
    <div className={styles.circularSkill}>
      <svg className={styles.progressCircle} height="120" width="120">
        <circle
          className={styles.circleBg}
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="10"
        />
        <circle
          className={styles.circleProgress}
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className={styles.label}>
        <span>{skill.percentage}%</span>
        <p className={styles.skilltitle}>{skill.title}</p>
      </div>
    </div>
  );
};

export default CircularProgress;

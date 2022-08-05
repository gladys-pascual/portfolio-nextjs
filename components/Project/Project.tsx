import * as React from 'react';
import styles from './Project.module.scss';

const Project = () => {
  return (
    <div className={styles.project}>
      <h4 className={styles.projectTitle}>Budget Tracker App</h4>
      <div className={styles.linkWrapper}>
        <div className={styles.links}>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-link" aria-hidden="true">
              {' '}
              <span className={styles.linkText}>Live</span>{' '}
            </i>
          </a>
        </div>
        <div className={styles.links}>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github-alt" aria-hidden="true">
              {' '}
              <span className={styles.linkText}>FE Repo</span>{' '}
            </i>
          </a>
        </div>
        <div className={styles.links}>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github-alt" aria-hidden="true">
              {' '}
              <span className={styles.linkText}>BE Repo</span>{' '}
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;

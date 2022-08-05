import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerSocials}>
        <li>
          <a
            href="https://www.linkedin.com/in/gladyspascual/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/gladys-pascual"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/gladyspascual"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-dev"></i>
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/glads_pascual"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
      <p className={styles.copyrightText}>Gladys &copy; 2022</p>
    </footer>
  );
}

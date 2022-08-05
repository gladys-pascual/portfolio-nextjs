import * as React from 'react';
import styles from './ContactCard.module.scss';
import Image from 'next/image';
import myPic from '../../public/myPic.jpg';
import classnames from 'classnames';

function CardBack({ handleClick }: any) {
  return (
    <>
      <div className={styles.contactCardBack}>
        <div className={styles.myPicContact}>
          <Image src={myPic} alt="Picture of the author" />
        </div>
        <div className={styles.contactDetails}>
          <h1 className={styles.name}>Gladys Pascual</h1>
          <h2 className={styles.job}>Software Engineer</h2>

          <i
            className={classnames('fa fa-mobile', styles.contactLink)}
            aria-hidden="true"
          >
            <span>
              {' '}
              <a
                href="tel:00353873647048"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileNum}
              >
                +353 873647048
              </a>
            </span>
          </i>

          <i
            className={classnames('far fa-paper-plane', styles.contactLink)}
            aria-hidden="true"
          >
            <span>
              <a
                href="mailto:gladyskate@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                gladyskate@gmail.com
              </a>
            </span>
          </i>

          <i
            className={classnames('fab fa-github-alt', styles.contactLink)}
            aria-hidden="true"
          >
            <span>
              {' '}
              <a
                href="https://github.com/gladys-pascual"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/gladys-pascual
              </a>
            </span>
          </i>
          <i
            className={classnames('fab fa-linkedin-in', styles.contactLink)}
            aria-hidden="true"
          >
            <span>
              {' '}
              <a
                href="https://www.linkedin.com/in/gladyspascual/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/gladyspascual
              </a>
            </span>
          </i>
        </div>
      </div>
      <button onClick={handleClick} className={styles.flipMe}>
        ((( flip me )))
      </button>
    </>
  );
}

export default CardBack;

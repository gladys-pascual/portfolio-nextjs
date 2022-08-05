import * as React from 'react';
import Image from 'next/image';
import styles from './ContactCard.module.scss';
import contact from '../../public/cardFront.svg';

function CardFront({ handleClick }: any) {
  return (
    <>
      <div className={styles.contactCardFront}>
        <div className={styles.contactImageWrapper}>
          <Image
            src={contact}
            alt="Contact card front picture"
            className={styles.contact}
          />
        </div>
      </div>
      <button onClick={handleClick} className={styles.flipMe}>
        ((( flip me )))
      </button>
    </>
  );
}

export default CardFront;

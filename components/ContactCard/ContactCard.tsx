import * as React from 'react';
import ReactCardFlip from 'react-card-flip';
import CardBack from './CardBack';
import CardFront from './CardFront';
import styles from './ContactCard.module.scss';

const ContactCard = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <div className={styles.flipCardWrapper}>
      <div className={styles.flipCard}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <CardFront handleClick={handleClick} />
          <CardBack handleClick={handleClick} />
        </ReactCardFlip>
      </div>
    </div>
  );
};

export default ContactCard;

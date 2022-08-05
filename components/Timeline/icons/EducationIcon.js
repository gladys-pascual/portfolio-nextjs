import educationIcon from '../../../public/EducationIcon.svg';
import styles from './Icon.module.scss';
import Image from 'next/image';

const EducationIcon = () => {
  return (
    <div className={styles.iconWrapper}>
      <div className={styles.icon}>
        <Image src={educationIcon} alt="education icon" />
      </div>
    </div>
  );
};
export default EducationIcon;

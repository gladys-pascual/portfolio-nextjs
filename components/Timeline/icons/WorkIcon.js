import workIcon from '../../../public/workIcon.png';
import styles from './Icon.module.scss';
import Image from 'next/image';

const WorkIcon = () => {
  return (
    <div className={styles.iconWrapper}>
      <div className={styles.icon}>
        <Image src={workIcon} alt="work icon" />
      </div>
    </div>
  );
};
export default WorkIcon;

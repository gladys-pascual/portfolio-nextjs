import styles from './about.module.scss';
import Image from 'next/image';
import myPic from '../public/myPic.jpg';
import Link from 'next/link';
import Timeline from '../components/Timeline/Timeline';

export default function About() {
  return (
    <section>
      <div className={styles.aboutIntroWrapper}>
        <div className={styles.aboutIntro}>
          <div className={styles.myPicWrapper}>
            <Image
              src={myPic}
              alt="Picture of the author"
              className={styles.myPic}
            />
          </div>
          <div>
            <p className={styles.aboutIntroText}>
              Hi there, I'm Gladys, a frontend-focused software engineer based
              in Dublin, Ireland. My main technologies are React and Typescript,
              and I enjoy enhancing my skills by building{' '}
              <Link href="/projects">
                <span className={styles.projectLink}>projects</span>
              </Link>
              .
            </p>

            <p className={styles.aboutIntroText}>
              My goal is to become a T-shaped software engineer, who is
              specialized in the frontend, with broad knowledge of backend.
            </p>

            <p className={styles.aboutIntroText}>
              When I'm not coding, I train in weightlifting, and compete at a
              national level. You can also find me drinking good coffee, eating
              delicious food, or watering my house plants.
            </p>
          </div>
        </div>
      </div>
      <Timeline />
      <p className={styles.interview}>
        You can read more about my journey to world of tech in this{' '}
        <a
          href="https://irishtechnews.ie/using-lockdown-to-career-change-into-tech/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.interviewLink}
        >
          interview
        </a>
        .
      </p>
    </section>
  );
}

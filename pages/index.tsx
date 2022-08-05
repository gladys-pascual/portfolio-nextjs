import Head from 'next/head';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gladys Pascual Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.home}>
        <div className={styles.myPicWrapper}>
          <img src="/myPic.jpg" alt="Gladys Pascual" className={styles.myPic} />
        </div>
        <h1 className={styles.title1}>Hi there 👋 I'm Gladys </h1>
        <h1 className={styles.title2}> Software Engineer</h1>
        <p className={styles.description}>Focusing on frontend development</p>
        <div className={styles.sayHello}>
          <a
            href="mailto:gladyskate@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Say hello
          </a>
        </div>
      </main>
    </div>
  );
}

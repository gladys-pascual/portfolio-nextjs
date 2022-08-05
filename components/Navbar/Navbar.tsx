import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss';
import MobileNav from './MobileNav';
import useWindowDimensions from './useWindowDimensions';

const Navbar = () => {
  const router = useRouter();
  const [isHovering, setIsHovering] = React.useState(false);

  const { width } = useWindowDimensions();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      {width && width > 650 ? (
        <nav className={styles.header}>
          <div className={styles.headerLogo}>
            <Link href="/">
              <a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className={styles.logoWrapper}>
                  <img
                    src="/GP.png"
                    alt="Gladys Pascual logo"
                    className={isHovering ? styles.headerLogoHovered : ''}
                  />
                </div>
                <h1 className={styles.headerText}>Gladys Pascual</h1>
              </a>
            </Link>
          </div>

          <ul className={styles.headerLinks}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={router.pathname == '/about' ? styles.active : ''}>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a
                  className={
                    router.pathname == '/projects' ? styles.active : ''
                  }
                >
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={router.pathname == '/contact' ? styles.active : ''}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <MobileNav pageWrapId={'page-wrap'} outerContainerId={'App'} />
      )}
    </>
  );
};

export default Navbar;

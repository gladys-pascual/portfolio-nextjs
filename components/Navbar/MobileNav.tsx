import * as React from 'react';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';

type NavbarProps = {
  pageWrapId: string;
  outerContainerId: string;
};

const MobileNav = (props: NavbarProps) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  const handleStateChange = (state: {
    isOpen: boolean | ((prevState: boolean) => boolean);
  }) => setIsMobileNavOpen(state.isOpen);

  const onClickLink = () => setIsMobileNavOpen(false);

  return (
    <>
      <Menu
        {...props}
        right
        isOpen={isMobileNavOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <ul>
          <li>
            <Link href="/">
              <a className="menu-item" onClick={onClickLink}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="menu-item" onClick={onClickLink}>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="menu-item" onClick={onClickLink}>
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="menu-item" onClick={onClickLink}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </Menu>
    </>
  );
};

export default MobileNav;

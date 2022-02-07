import Link from "next/link";
import { useState } from "react";
import Button from "../../UI/button";
import ToggleButton from "../../UI/toggle-button";
import styles from "./header.module.scss";
import MobileNav from "./mobile-nav";
import Backdrop from "../../UI/backdrop";

const Header = (props) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <ToggleButton toggleMobileNav={toggleMobileNav} />
      <div className={styles.mode}>LIGHT/DARK</div>
      <MobileNav opened={showMobileNav} close={toggleMobileNav} />
      {showMobileNav && <Backdrop close={toggleMobileNav} />}

      <nav className={styles["main-nav"]}>
        <ul className={styles.navigation}>
          <li>
            <Link href="#">ABOUT</Link>
          </li>
          <li>
            <Link href="#">PROJECTS</Link>
          </li>
          <li>
            <Link href="#">CONTACT</Link>
          </li>
          <li>
            <Button mode="cta">Download CV</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

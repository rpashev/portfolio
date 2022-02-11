import { useState } from "react";
import ToggleButton from "../../UI/toggle-button";
import styles from "./header.module.scss";
import MobileNav from "./mobile-nav";
import Backdrop from "../../UI/backdrop";
import Navigation from "../navigation";

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
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;

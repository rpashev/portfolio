import Link from "next/link";
import Button from "../../UI/button";
import styles from "./header.module.scss";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.mode}>LIGHT/DARK</div>
      <nav>
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

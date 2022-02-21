import Link from "next/link";
import Button from "../UI/button";
import styles from "./navigation.module.scss";

const Navigation = (props) => {
  const { fromFooter } = props;
  return (
    <ul
      className={`${styles.navigation} ${fromFooter ? styles.footernav : ""}`}
    >
      <li>
        <Link href="#about">ABOUT</Link>
      </li>
      <li>
        <Link href="#projects">PROJECTS</Link>
      </li>
      <li>
        <Link href="#contact">CONTACT</Link>
      </li>
      <li className={styles.cv}>
        {!fromFooter && <Button to="/dgc.pdf" mode="cta" newPage>Download CV</Button>}
        {fromFooter && <a href="/dgc.pdf" target="_blank" newPage>DOWNLOAD CV</a>}
      </li>
    </ul>
  );
};

export default Navigation;

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
        <Link href="#">PROJECTS</Link>
      </li>
      <li>
        <Link href="#">CONTACT</Link>
      </li>
      <li className={styles.cv}>
        {!fromFooter && <Button mode="cta">Download CV</Button>}
        {fromFooter && <Link href="#">DOWNLOAD CV</Link>}
      </li>
    </ul>
  );
};

export default Navigation;

import Image from "next/image";
import github from "../../public/images/icons/GitHub-Mark-Light-64px.png";
import linkedin from "../../public/images/icons/linkedin-3-64.png";
import styles from "./socials.module.scss";

const Socials = () => {
  return (
    <ul className={styles.socials}>
      <li>
        <a href="https://github.com/rpashev" target="_blank">
          <Image src={github} width={64} height={64}></Image>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/rosenpashev/" target="_blank">
          <Image src={linkedin} width={64} height={64}></Image>
        </a>
      </li>
    </ul>
  );
};

export default Socials;

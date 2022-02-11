import Button from "../UI/button";
import Socials from "./socials";
import arrowDown from "../../public/images/icons/arrow-204-32.png";
import styles from "./intro.module.scss";
import Image from "next/image";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1>
        Hello, my name is <span>Rosen</span>.
      </h1>
      <h1>I am an aspiring web developer.</h1>
      <div className={styles.actions}>
        <Socials />
        <Button mode="light">CONTACT</Button>
        <Button mode="outline-transparent">About Me</Button>
      </div>
      <div className={styles.cta}>
        <Button mode="outline">
          <Image src={arrowDown} width={24} height={24}></Image>
          <span>SEE MY WORK</span>
        </Button>
      </div>
    </div>
  );
};

export default Intro;

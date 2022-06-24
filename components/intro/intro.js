import Button from "../UI/button";
import Socials from "./socials";
import arrowDown from "../../public/images/icons/arrow-204-32.png";
import styles from "./intro.module.scss";
import Image from "next/image";

const Intro = () => {
  return (
    <section className={styles.intro} id="intro">
      <h1>
        Hello, my name is <span>Rosen</span>.
      </h1>
      <h1>I am an aspiring web developer.</h1>

      <Socials noEmail />
      <div className={styles.cta}>
        <Button to="#projects" mode="outline">
          <Image src={arrowDown} width={24} height={24} alt=""></Image>
          <span>SEE MY WORK</span>
        </Button>
      </div>
    </section>
  );
};

export default Intro;

import Image from "next/image";
import Button from "../UI/button";
import styles from "./info.module.scss";

const PersonInfo = () => {
  return (
    <div className={styles.info}>
      <h2>What drives me?</h2>
      <p>
        Fully committed to the philosophy of life-long learning, I’m a full
        stack developer with a deep passion for JavaScript, React and all things
        web development. The unique combination of creativity, logic, technology
        and never running out of new things to discover, drives my excitement
        and passion for web development. When I’m not at my computer I like to
        spend my time reading, keeping fit and playing guitar.
      </p>
      <div className={styles.actions}>
        <Button mode="light">Send a message</Button>
        <Button mode="cta">Download CV</Button>
      </div>
    </div>
  );
};

export default PersonInfo;

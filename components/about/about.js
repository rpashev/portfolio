import PersonInfo from "./info";
import styles from "./about.module.scss";
import Skills from "./skills";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <h1>About</h1>
      <div className={styles.content}>
        <PersonInfo />
        <Skills />
      </div>
    </div>
  );
};

export default About;

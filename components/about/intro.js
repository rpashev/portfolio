import Button from "../UI/button";
import styles from "./intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1>
        Hello, my name is <span>Rosen</span>.
      </h1>
      <h1>I am an aspiring web developer.</h1>
      <Button mode="outline">DOWNLOAD CV</Button>
    </div>
  );
};

export default Intro;

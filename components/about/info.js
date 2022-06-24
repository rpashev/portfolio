import Button from "../UI/button";
import styles from "./info.module.scss";

const PersonInfo = () => {
  return (
    <div className={styles.info}>
      <h2>What drives me?</h2>
      <p>
        As a naturally very curious person, it made sense for me to immerse
        myself in web development - a dynamic field where you can learn and
        apply new things every day. I love building things and care about
        getting better, challenging myself on a day to day basis. For me, web
        development is a journey without an end destination and I just enjoy the
        truly rewarding process of learning how to solve meaningful problems in
        novel ways.
      </p>
      <div className={styles.actions}>
        <Button to="#contact" mode="light">
          Contact
        </Button>
        <Button to="/rosen-pashev-resume.pdf" mode="cta" newPage>
          Resume
        </Button>
      </div>
    </div>
  );
};

export default PersonInfo;

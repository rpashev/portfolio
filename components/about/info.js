import Image from "next/image";
import svg from "../../public/images/user.svg";
import styles from "./info.module.scss";

const PersonInfo = () => {
  return (
    <div className={styles.info}>
      <div className={styles["img-container"]}>
        <Image width={300} height={300} src={svg} />
      </div>
      <div>
        <p>
          Fully committed to the philosophy of life-long learning, I’m a
          full stack developer with a deep passion for JavaScript, React and all
          things web development. The unique combination of creativity, logic,
          technology and never running out of new things to discover, drives my
          excitement and passion for web development. When I’m not at my
          computer I like to spend my time reading, keeping fit and playing
          guitar.
        </p>
      </div>
    </div>
  );
};

export default PersonInfo;

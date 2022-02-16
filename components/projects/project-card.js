import Image from "next/image";
import Button from "../UI/button";
import styles from "./project-card.module.scss";
import movieImg from "../../public/images/movie-project.png";

const ProjectCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles["img-container"]}>
          <Image src={movieImg} width={400} height={225} />
        </div>
        <ul className={styles.techstack}>
          <li>Javascript</li>
          <li>React</li>
          <li>Node</li>
          <li>Mongo</li>
          <li>Express</li>
          <li>Html</li>
          <li>SCSS</li>
          <li>Context API</li>
          <li>Mongo Atlas</li>
          <li>Axios</li>
        </ul>
      </div>
      <div className={styles.right}>
        <h2>Project title</h2>
        <p>
          Text messages are used for personal, family, business and social
          purposes. Governmental and non-governmental organizations use text
          messaging for communication between colleagues. In the 2010s, the
          sending of short informal messages became an accepted part of many
          cultures, as happened earlier with emailing. In the 2010s, the
          sending of short informal messages became an accepted part.
        </p>
        <div className={styles.actions}>
          <Button>View Code</Button>
          <Button mode="cta">LIVE</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

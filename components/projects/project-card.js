import Image from "next/image";
import Button from "../UI/button";
import styles from "./project-card.module.scss";
import movieImg from "../../public/images/movie-project-2.png";

const ProjectCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles["img-container"]}>
          <Image src={movieImg} width={550} height={313} />
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
          A fully responsive Next.js dummy e-commerce application created by
          using Static Generation for most pages and Server Side Rendering for
          others. I used many new to me technologies in this project that made
          the development process challenging and very interesting. You can learn more about the app and the challenges I've met HERE.
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

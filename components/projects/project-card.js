import Image from "next/image";
import Button from "../UI/button";
import styles from "./project-card.module.scss";
import codeIcon from "../../public/images/icons/code-32.png";

const ProjectCard = (props) => {
  const { title, img, techstack, description, github, live } = props;

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles["img-container"]}>
          <Image src={img} width={550} height={313} />
        </div>
        <ul className={styles.techstack}>
          {techstack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.right}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.actions}>
          <Button to={github}>
            <Image src={codeIcon} width={24} height={24}></Image>
            <span>CODE</span>
          </Button>
          <Button to={live} mode="cta">
            LIVE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

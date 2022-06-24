import Image from "next/image";
import Button from "../UI/button";
import styles from "./project-card.module.scss";
import codeIcon from "../../public/images/icons/code-32.png";
import RestBadge from "../UI/rest-badge";

const ProjectCard = (props) => {
  const { title, img, techstack, description, github, live } = props;

  return (
    <li className={styles.card}>
      <div className={styles.left}>
        <div className={styles["img-container"]}>
          <Image src={img} width={550} height={277} placeholder="blur" alt="" />
        </div>
        <ul className={styles.techstack}>
          {techstack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.right}>
        <h2>{title}</h2>
        {props.rest && <RestBadge link={props.rest} />}
        <p>{description}</p>
        <div className={styles.actions}>
          <Button to={github} newPage>
            <Image src={codeIcon} width={24} height={24} alt=""></Image>
            <span>CODE</span>
          </Button>
          <Button to={live} newPage mode="cta">
            LIVE
          </Button>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;

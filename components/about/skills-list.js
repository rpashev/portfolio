import jsIcon from "../../public/images/techstack/javascript.svg";
import htmlIcon from "../../public/images/techstack/html-5.svg";
import cssIcon from "../../public/images/techstack/css-3.svg";
import reactIcon from "../../public/images/techstack/react.svg";
import vueIcon from "../../public/images/techstack/vue.svg";
import sassIcon from "../../public/images/techstack/sass.svg";
import boostrapIcon from "../../public/images/techstack/bootstrap.svg";
import nextjsIcon from "../../public/images/techstack/nextjs.svg";
import nodeIcon from "../../public/images/techstack/nodejs.svg";
import expressIcon from "../../public/images/techstack/express.svg";
import mongoIcon from "../../public/images/techstack/mongodb.svg";
import angularIcon from "../../public/images/techstack/angular.svg";
import typescriptIcon from "../../public/images/techstack/typescript.svg";
import TechstackItem from "../UI/techstack-item";
import styles from "./skills-list.module.scss";

const SkillsList = (props) => {
  const frontendSkills = [
    { title: "HTML", source: htmlIcon },
    { title: "CSS", source: cssIcon },
    { title: "JAVASCRIPT", source: jsIcon },
    { title: "REACT", source: reactIcon },
    { title: "VUE", source: vueIcon },
    { title: "NEXT", source: nextjsIcon },
    { title: "ANGULAR", source: angularIcon },
    { title: "TYPESCRIPT", source: typescriptIcon },
    { title: "SASS/SCSS", source: sassIcon },
    { title: "BOOTSTRAP", source: boostrapIcon },
  ];
  const backendSkills = [
    { title: "NODE", source: nodeIcon },
    { title: "EXPRESS", source: expressIcon },
    { title: "MONGODB", source: mongoIcon },
  ];
  const skills = props.backend ? backendSkills : frontendSkills;

  return (
    <div>
      <h2>{props.listName}</h2>
      <ul className={styles.list}>
        {skills.map((skill) => {
          return (
            <li key={skill.title}>
              <TechstackItem title={skill.title} source={skill.source} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;

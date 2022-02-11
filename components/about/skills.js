import SkillsList from "./skills-list";
import styles from "./skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <SkillsList listName="Frontend Skills" />
      <SkillsList listName="Backend Skills" backend />
    </div>
  );
};

export default Skills;

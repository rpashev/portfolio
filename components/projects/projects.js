import ProjectCard from "./project-card";
import styles from "./projects.module.scss";

const Projects = (props) => {
  return (
    <section className={styles.projects} id="projects">
      <h1>Projects</h1>
      <div className={styles.list}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;

import ProjectCard from "./project-card";
import projects from "../../projects-info";
import styles from "./projects.module.scss";
import AccountDetails from "./account-details";

const Projects = (props) => {
  return (
    <section className={styles.projects} id="projects">
      <h1>Projects</h1>
      <AccountDetails />
      <div className={styles.list}>
        {projects.map((project) => {
          return (
            <ProjectCard
              img={project.img}
              title={project.title}
              description={project.description}
              techstack={project.techstack}
              github={project.github}
              live={project.live}
              key={project.github}
              rest={project.rest}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

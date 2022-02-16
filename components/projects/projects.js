import ProjectCard from "./project-card";
import projects from "../../projects-info";
import styles from "./projects.module.scss";

const Projects = (props) => {
  return (
    <section className={styles.projects} id="projects">
      <h1>Projects</h1>
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
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

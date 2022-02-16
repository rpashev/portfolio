import About from "../components/about/about";
import Intro from "../components/intro/intro";
import Projects from "../components/projects/projects";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Intro />
      <About />
      <Projects />
    </div>
  );
};

export default Home;

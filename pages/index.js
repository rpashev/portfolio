import About from "../components/about/about";
import Contact from "../components/contact";
import Intro from "../components/intro/intro";
import Projects from "../components/projects/projects";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <main className={styles.home}>
      <Intro />
      <Projects />
      <About />
      <Contact />
    </main>
  );
};

export default Home;

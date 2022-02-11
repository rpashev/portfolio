import About from "../components/about/about";
import Intro from "../components/intro/intro";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Intro />
      <About />
    </div>
  );
};

export default Home;

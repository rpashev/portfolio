import Intro from "../components/about/intro";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Intro />
    </div>
  );
};

export default Home;

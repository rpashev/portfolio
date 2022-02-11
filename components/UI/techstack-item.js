import Image from "next/image";
import styles from "./techstack-item.module.scss";

const TechstackItem = (props) => {
  return (
    <div className={styles.item}>
      <Image src={props.source} width={48} height={48} />
      <h5>{props.title}</h5>
    </div>
  );
};

export default TechstackItem;

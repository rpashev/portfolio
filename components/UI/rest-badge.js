import styles from "./rest-badge.module.scss";
import codeIcon from "../../public/images/icons/code-32-black.png";
import Image from "next/image";

const RestBadge = (props) => {
  return (
    <div className={styles.badge}>
      <a target="_blank" href={props.link} rel="noreferrer">
        <span>REST API</span>
        <span className={styles.arrow}>
          <Image src={codeIcon} width={24} height={24} alt=""></Image>
        </span>
      </a>
    </div>
  );
};

export default RestBadge;

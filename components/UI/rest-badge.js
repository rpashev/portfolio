import styles from "./rest-badge.module.scss";

const RestBadge = (props) => {
  return (
    <div className={styles.badge}>
      <a target="_blank" href={props.link} rel="noreferrer">
        <span>REST API</span>
        <span className={styles.arrow}>&#8594;</span>
      </a>
    </div>
  );
};

export default RestBadge;

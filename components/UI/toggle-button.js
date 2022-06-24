import styles from "./toggle-button.module.scss";

const ToggleButton = (props) => {
  return (
    <button
      className={styles["toggle-button"]}
      onClick={props.toggleMobileNav}
      aria-label="toggle mobile navigation"
    >
      <span className={styles["toggle-button__bar"]}></span>
      <span className={styles["toggle-button__bar"]}></span>
      <span className={styles["toggle-button__bar"]}></span>
    </button>
  );
};

export default ToggleButton;

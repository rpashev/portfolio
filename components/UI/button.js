import styles from "./button.module.scss";

const Button = (props) => {
  return (
    <button className={`${styles.btn} ${props.mode ? styles[props.mode] : ""}`}>
      {props.children}
    </button>
  );
};

export default Button;

import styles from "./button.module.scss";

const Button = (props) => {
  if (props.to) {
    return (
      <a
        href={props.to}
        target={`${props.newPage ? "_blank" : ""}`}
        className={`${styles.btn} ${props.mode ? styles[props.mode] : ""}`}
      >
        {props.children}
      </a>
    );
  }
  return (
    <button className={`${styles.btn} ${props.mode ? styles[props.mode] : ""}`}>
      {props.children}
    </button>
  );
};

export default Button;

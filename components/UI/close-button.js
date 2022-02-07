import styles from "./close-button.module.scss";

const CloseButton = (props) => {
  return (
    <button
      type="button"
      onClick={props.close}
      className={styles["btn-close"]}
      aria-label="Close"
    >
      <svg
        className="w-1 h-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default CloseButton;

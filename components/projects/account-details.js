import styles from "./account-details.module.scss";

const AccountDetails = () => {
  return (
    <div className={styles["account-info"]}>
      <p>
        In case you have no time to register, you can use the following account
        to browse all of the below web applications:
      </p>
      <div className={styles.details}>
        <h4>
          email: <span>test@mail.com</span>
        </h4>
        <h4>
          password: <span>123456</span>
        </h4>
      </div>
    </div>
  );
};

export default AccountDetails;

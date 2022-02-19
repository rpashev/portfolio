import styles from "./account-details.module.scss";

const AccountDetails = () => {
  return (
    <div className={styles["account-info"]}>
      <p>
        In case you have no time to register, you can use the following account
        to browse all of the below web applications:
      </p>
      <h4>email: test@mail.com</h4>
      <h4>password: 123456</h4>
    </div>
  );
};

export default AccountDetails;

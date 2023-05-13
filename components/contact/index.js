import { useState } from "react";
import Button from "../UI/button";
import styles from "./index.module.scss";

const access_key = "cb14bcfc-f60b-498a-bf59-78e91005dc0b";

const Contact = (props) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    setError(null);
    setSuccess(false);

    if (!email.trim() || !message.trim() || !subject.trim()) {
      return setError("All fields must be completed!");
    }

    if (!email.includes("@") || !email.includes(".")) {
      return setError("Email must be valid!");
    }

    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key,
          email,
          subject,
          message,
        }),
      });
      const { success } = await response.json();

      if (!success) {
        setError("Couldn't send message, something went wrong!");
      } else {
        setSuccess(true);
        resetInput();
      }
      return setLoading(false);
    } catch (err) {
      setError("Couldn't send message, something went wrong!");
      return setLoading(false);
    }
  };

  const resetInput = () => {
    setEmail("");
    setMessage("");
    setSubject("");
  };

  return (
    <section className={styles.contact} id="contact">
      <h1>Contact</h1>
      <h2>Want to talk?</h2>
      <p className={styles.prompt}>
        Send me a message below or email me at <span>rossen1991@gmail.com</span>
      </p>
      <form onSubmit={submitHandler}>
        <input type="hidden" name="access_key" value={access_key} />
        <div className={styles["form-control"]}>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button>{loading ? "Sending..." : "Send Message"}</Button>
      </form>
      {success && <p className={styles.success}>Thank you for your message!</p>}
      {error && <p className={styles.error}>{error}</p>}
    </section>
  );
};

export default Contact;

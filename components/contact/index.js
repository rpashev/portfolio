import { useState } from "react";
import Button from "../UI/button";
import styles from "./index.module.scss";

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
      const response = await fetch("/api/contact", {
        body: JSON.stringify({
          email,
          message,
          subject,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const { error } = await response.json();

      if (error) {
        setError(error);
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
    <section className={styles.contact}>
      <h1>Contact</h1>
      <form onSubmit={submitHandler}>
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
          <label htmlFor="email">Subject</label>
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

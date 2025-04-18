import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("meoabjdb");
  if (state.succeeded) {
    return <p>Thank you for your interest!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Send me a message</h2>
      <div className={styles.container}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" placeholder="Your email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className={styles.container}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function App() {
  return <ContactForm />;
}

export default ContactForm;

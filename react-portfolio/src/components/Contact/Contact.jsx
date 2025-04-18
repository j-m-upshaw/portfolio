import React, { useState } from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import ContactForm from "./ContactForm";
import ContactFormModal from "./ContactFormHolder";

export const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault(); // prevent opening mail client
    setShowForm(true);
  };

  return (
    <section id="contact">
      <footer id="footer" className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
          <img
            //hero/heroImage.gif
            src={getImageUrl("hero/heroImage.gif")}
            alt="Picture of Me"
          />
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/Email_Icon.png")} alt="Email Icon" />
            <a href="#" onClick={handleEmailClick}>
              jalandmupshaw@gmail.com
            </a>
          </li>

          <li className={styles.link}>
            <img
              src={getImageUrl("contact/LinkedIn_Icon.png")}
              alt="LinkedIn Icon"
            />
            <a href="https://www.linkedin.com/in/jaland-upshaw" target="_blank">
              www.linkedin.com/in/jaland-upshaw
            </a>
          </li>

          <li className={styles.link}>
            <img
              src={getImageUrl("contact/GitHub_Icon.png")}
              alt="GitHub Icon"
            />
            <a href="https://github.com/j-m-upshaw" target="_blank">
              github.com
            </a>
          </li>
        </ul>
      </footer>
      {showForm && <ContactFormModal onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default Contact;

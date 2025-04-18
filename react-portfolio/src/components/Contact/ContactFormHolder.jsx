// components/ContactFormModal.jsx
import React from "react";
import styles from "./ContactFormModal.module.css";
import ContactForm from "./ContactForm"; //Using FromSpree

const ContactFormModal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactFormModal;

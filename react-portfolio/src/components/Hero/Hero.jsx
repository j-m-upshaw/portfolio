import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Jaland!</h1>
        <p className={styles.description}>
          I’m a full-stack developer and recent graduate of the University of
          Alabama with a strong foundation in modern web technologies. Feel free
          to reach out to discuss potential opportunities or collaborations.
        </p>
        <a href="mailto:jalandmupshaw@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.gif")}
        alt="hero Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;

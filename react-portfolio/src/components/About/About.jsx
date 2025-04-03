import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="aboutImage"
          width="50px"
          height="50px"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon-48px.png")}
              alt="cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in HTML, CSS, and
                REACT.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon2.png")}
              alt="Server icon"
              width="50px"
              height="50px"
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience in using C, C++, and Python.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon-48px.png")}
              alt="cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Team Player</h3>
              <p>I have a lot experience in working in a team setting.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

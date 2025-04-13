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
                Experienced in front-end development using HTML, CSS, and React
                to build responsive and dynamic user interfaces.
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
              <p>
                Proficient in C, C++, and Python, with a strong emphasis on
                systems-level programming and object-oriented design using C and
                C++.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon-48px.png")}
              alt="cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Team Player</h3>
              <p>
                I have extensive experience working in team settings, including
                collaborating on the development of a mobile app for a company
                as part of a larger project.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

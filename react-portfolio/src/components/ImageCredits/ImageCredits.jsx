import React from "react";

import styles from "./ImageCredits.module.css";
import credits from "../../data/credits.json";

const ImageCredits = () => {
  return (
    <div className={styles.container}>
      <h2>Images used with permission:</h2>
      <ul className={styles.credits}>
        {credits.map((credit, id) => (
          <li className={styles.credit} key={id}>
            Image used:&nbsp;
            <a
              href={credit.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {credit.image}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageCredits;

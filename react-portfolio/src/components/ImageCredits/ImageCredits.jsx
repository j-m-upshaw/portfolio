import React from "react";

import styles from "./ImageCredits.module.css";
import credits from "../../data/credits.json";

const ImageCredits = () => {
  return (
    <div className={styles.container}>
      <h2>Images used with permission from:</h2>
      <ul className={styles.credits}>
        {credits.map((credit, id) => (
          <li className={styles.credit} key={id}>
            <a
              href={credit.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {credit.name}
            </a>
            <p>by: {credit.user}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageCredits;

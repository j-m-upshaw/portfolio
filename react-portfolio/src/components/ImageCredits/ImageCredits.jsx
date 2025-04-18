import React, { useEffect, useState } from "react";
import styles from "./ImageCredits.module.css";
import credits from "../../data/credits.json";

const ImageCredits = () => {
  // variables for auto slideshow
  const [curIndex, setCurIndex] = useState(0);
  const slideInterval = 4000; //every 1000 is 1 second

  useEffect(() => {
    const interval = setInterval(() => {
      setCurIndex((prevIndex) =>
        prevIndex === credits.length - 1 ? 0 : prevIndex + 1
      );
    }, slideInterval);

    return () => clearInterval(interval);
  }, []);

  const current = credits[curIndex];

  return (
    <section id="credits">
      <div className={styles.container}>
        <h2>Images used with permission:</h2>
        <div className={styles.slide}>
          <img
            key={curIndex}
            src={current.imageSrc}
            alt={current.imageName}
            className={styles.image}
          />
          <p className={styles.caption}>
            <strong>{current.imageName}</strong> by{" "}
            <a
              href={current.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {current.name}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageCredits;

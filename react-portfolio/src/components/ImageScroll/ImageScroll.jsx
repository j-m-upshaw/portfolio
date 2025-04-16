import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import styles from "./ImageScroll.module.css";

const ImageScroll = () => {
  const [curVisible, setCurVisible] = useState(false);

  // Show button only when scrolled down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      setCurVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    curVisible && (
      <button onClick={scrollTop} className={styles.scrollToTop}>
        <FaArrowUp />
      </button>
    )
  );
};

export default ImageScroll;

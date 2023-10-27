import React from "react";
import styles from "./ImageCards.module.css";

const ImageCards = ({ boolean, heading, imageLink }) => {
  return (
    <div>
      {boolean ? (
        <div className={styles.largeCards}>
          <img src={imageLink} alt="imag" />
          <p className={styles.headingL}>{heading}</p>
        </div>
      ) : (
        <div className={styles.smallCards}>
          <img src={imageLink} alt="imag" />
          <p className={styles.headingS}>{heading}</p>
        </div>
      )}
    </div>
  );
};

export default ImageCards;

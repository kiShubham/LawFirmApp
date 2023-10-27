import React from "react";
import styles from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className={styles.parent}>
      <p className={styles.Heading}>Subscribe Our Newsletter</p>
      <div className={styles.btnSec}>
        <input type="text" className={styles.customInput} placeholder="Name:" />
        <input
          type="text"
          className={styles.customInput2}
          placeholder="Enter your Email"
        />
        <button className={styles.cutommBtn}>send</button>
      </div>
    </div>
  );
};

export default NewsLetter;

/*  */

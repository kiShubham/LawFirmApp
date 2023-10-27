import React from "react";
import styles from "./Faqs.module.css";
import plus from "../../assets/plus.png";

const Faqs = () => {
  return (
    <div className={styles.faqsParent}>
      <div className={styles.child1}>
        <p className={styles.heading}>FAQS</p>
        <p className={styles.randomTxt}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className={styles.child2}>
        <p className={styles.subHeading}>Do I need a personal injury report?</p>
        <p className={styles.randomTxt}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequatduis enim velit mollit Exer.
        </p>
        <p className={styles.line}></p>
        <div className={styles.toggle}>
          <span className={styles.subHeading}>How much is my case worth?</span>
          <img src={plus} alt="plusBtn" />
        </div>
        <p className={styles.line}></p>
        <div className={styles.toggle}>
          <span className={styles.subHeading}>
            What should I do right after car accidect
          </span>
          <img src={plus} alt="plusBtn" />
        </div>
        <p className={styles.line}></p>
        <div className={styles.toggle}>
          <span className={styles.subHeading}>
            What should I do right after car accidect
          </span>
          <img src={plus} alt="plusBtn" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
//className={styles.plusBtn}

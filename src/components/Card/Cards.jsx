import React from "react";
import styles from "./Card.module.css";
import gift from "../../assets/Group 19.png";

const Cards = ({ heading = "100% Success Rate" }) => {
  const text =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.";
  return (
    <div className={styles.cardWrapper}>
      <img src={gift} alt="imag" />
      <p className={styles.heading}>{heading}</p>
      <p className={styles.txt}>{text}</p>
      <button>Read More</button>
    </div>
  );
};

export default Cards;

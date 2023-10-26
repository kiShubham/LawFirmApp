import React from "react";
import styles from "./Card.module.css";
import gift from "../../assets/Group 19.png";

const CardPeople = ({ image = gift, heading = "Emily Hunt" }) => {
  const text =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia";
  return (
    <div className={styles.cardWrapperII}>
      <img src={image} alt="imag" />
      <p className={styles.headingII}>{heading}</p>
      <p className={styles.position}>Ceo of Hunt</p>
      <p className={styles.txtII}>{text}</p>
    </div>
  );
};

export default CardPeople;

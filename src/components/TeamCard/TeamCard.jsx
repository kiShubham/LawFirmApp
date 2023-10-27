import React from "react";
import styles from "./TeamCard.module.css";

const TeamCard = ({ image, Name, cases }) => {
  return (
    <div className={styles.card}>
      <div className={styles.details}>
        <img src={image} alt="personImg" />
        <div className={styles.txtBox}>
          <p className={styles.name}>{Name}</p>
          <p className={styles.SubString}>{cases}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

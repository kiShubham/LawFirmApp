import React from "react";
import styles from "./Hero.module.css";
import Navbar from "../Navbar/Navbar";
import person from "../../assets/personHero.png";
import letterIcon from "../../assets/Message 35.png";

const Hero = () => {
  return (
    <div className={styles.group1}>
      <div className={styles.parent}>
        <Navbar />
        <div className={styles.heroWrapper}>
          <div className={styles.heroLeftCol}>
            <div className={styles.highLigthedTxt}>
              <p>You don’t have to</p>
              <p>Fight them Alone.</p>
            </div>
            <div className={styles.randomTxt}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
              curabitur sodales conubia ut inceptos faucibus himenaeos tortor
              eget, hac massa gravida arcu interdum proin curae.
            </div>
            <div className={styles.emailBtn}>
              <img src={letterIcon} alt="icon" />
              <span className={styles.enterTxt}>Enter your email address</span>
              <span className={styles.overBtn}> Lets Talk</span>
            </div>
          </div>
          <div>
            <img src={person} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

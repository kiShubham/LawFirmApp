import React from "react";
import styles from "./TopSection.module.css";
import Cards from "../Card/Cards";
import CardPeople from "../Card/CardPeople";
import leftArrow from "../../assets/left.png";
import rightArrow from "../../assets/right.png";
import person1 from "../../assets/Ellipse 14-1.png";
import person2 from "../../assets/Ellipse 14-2.png";
import person3 from "../../assets/Ellipse 14.png";

const TopSection = () => {
  return (
    <div className={styles.group2}>
      <div className={styles.intro}>
        <p className={styles.leftCol}>Let’s Introduce Ourself</p>
        <div className={styles.line}></div>
        <div className={styles.rightCol}>
          <p className={styles.rightColTopic}>Criminal Lawyer</p>
          <p className={styles.rightColTxt}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>

      <div className={styles.middleSection}>
        <div className={styles.section1}>
          <p className={styles.topic}>Why Choose us?</p>
          <div className={styles.cards}>
            <Cards heading={"98% Success Rate"} />
            <Cards />
            <Cards />
          </div>
        </div>
        <div className={styles.practice}>
          <p className={styles.topic}>Area of Practices</p>
        </div>
        <div className={styles.customers}>
          <div className={styles.peoplesHeading}>
            <p className={styles.topic}>What says our happy Clients</p>
            <div className={styles.roundBtn}>
              <button style={{ background: "#E6E6E6" }}>
                <img src={leftArrow} alt="" />
              </button>
              <button>
                <img src={rightArrow} alt="" />
              </button>
            </div>
          </div>
          <div className={styles.peoplesCard}>
            <CardPeople heading="Jane cooper" image={person3} />
            <CardPeople heading="Devon Lane" image={person1} />
            <CardPeople heading="Robert Fox" image={person2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;

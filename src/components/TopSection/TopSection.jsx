import React from "react";
import styles from "./TopSection.module.css";
import Cards from "../Card/Cards";
import CardPeople from "../Card/CardPeople";
import leftArrow from "../../assets/left.png";
import rightArrow from "../../assets/right.png";
import person1 from "../../assets/Ellipse 14-1.png";
import person2 from "../../assets/Ellipse 14-2.png";
import person3 from "../../assets/Ellipse 14.png";
import ImageCards from "../ImageCards/ImageCards";
import imageOne from "../../assets/Rectangle 3652.png";
import imageTwo from "../../assets/Rectangle 3651.png";
import imageThree from "../../assets/Rectangle 3653.png";
import imageFour from "../../assets/Rectangle 3654.png";
import imageFive from "../../assets/Rectangle 3655.png";
import imageSix from "../../assets/Rectangle 3656.png";
import Team from "../Team/Team";
import NewsLetter from "../NewsLetter/NewsLetter";

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
          <div className={styles.blocks}>
            <ImageCards
              boolean={true}
              heading={"BUSINESS LAW"}
              imageLink={imageOne}
            />
            <ImageCards
              boolean={false}
              heading={"Partnership LAW"}
              imageLink={imageTwo}
            />
          </div>
          <div className={styles.blocks}>
            <ImageCards
              boolean={false}
              heading={"REAL ESTATE LAW"}
              imageLink={imageThree}
            />
            <ImageCards
              boolean={true}
              heading={"BUSINESS LAW"}
              imageLink={imageFour}
            />
          </div>
          <div className={styles.blocks}>
            <ImageCards
              boolean={true}
              heading={"LANDLORD DISPUTES"}
              imageLink={imageSix}
            />
            <ImageCards
              boolean={false}
              heading={"ELDER ABUSE"}
              imageLink={imageFive}
            />
          </div>
        </div>

        <div className={styles.customers}>
          <div className={styles.peoplesHeading}>
            <p className={styles.topic}>What says our happy Clients</p>
            <div className={styles.roundBtn}>
              <button style={{ background: "#E6E6E6" }}>
                <img src={leftArrow} alt="leftArrow" />
              </button>
              <button>
                <img src={rightArrow} alt="rightArrow" />
              </button>
            </div>
          </div>
          <div className={styles.peoplesCard}>
            <CardPeople heading="Jane cooper" image={person3} />
            <CardPeople heading="Devon Lane" image={person1} />
            <CardPeople heading="Robert Fox" image={person2} />
          </div>
        </div>

        <div className={styles.TeamSection}>
          <Team />
        </div>

        <div className={styles.NewsLetterSection}>
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default TopSection;

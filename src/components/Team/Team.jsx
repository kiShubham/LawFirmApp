import React from "react";
import styles from "./Team.module.css";
import TeamCard from "../TeamCard/TeamCard";
import p1 from "../../assets/Ellipse 15-1.png";
import p2 from "../../assets/Ellipse 15-2.png";
import p3 from "../../assets/Ellipse 15-3.png";
import p4 from "../../assets/Ellipse 15-4.png";
import p5 from "../../assets/Ellipse 15.png";
import p6 from "../../assets/Ellipse 16.png";

const Team = () => {
  return (
    <div className={styles.team}>
      <p className={styles.heading}>Our Team</p>
      <div className={styles.teamCards}>
        <TeamCard Name={"Danial"} cases={"301 Cases"} image={p5} />
        <TeamCard Name={"Sanfole"} cases={"850 Cases"} image={p6} />
        <TeamCard Name={"Cesforila"} cases={"470 Cases"} image={p3} />
        <TeamCard Name={"Colleen"} cases={"180 Cases"} image={p1} />
        <TeamCard Name={"Haldone"} cases={"212 Cases"} image={p2} />
        <TeamCard Name={"Nik Jeo"} cases={"350 Cases"} image={p4} />
      </div>
    </div>
  );
};

export default Team;

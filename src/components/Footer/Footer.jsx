import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import socialMediaLogos from "../../assets/socialMedia.png";

const Footer = () => {
  return (
    <div className={styles.FooteParent}>
      <div className={styles.child1}>
        <img src={logo} alt="logo" />
        <div className={styles.txt1}>
          <span>Home</span>
          <span>Attorneys</span>
          <span>Practice Areas</span>
          <span>About Us</span>
        </div>
        <img src={socialMediaLogos} alt="socialMediaLogos" />
      </div>
      <div className={styles.child2}>
        <span>© 2020 Acme. All right reserved.</span>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </div>
  );
};

export default Footer;

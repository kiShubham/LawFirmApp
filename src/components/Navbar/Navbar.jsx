import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.btnWrapper}>
        <button>Home</button>
        <button>Attorneys</button>
        <button>Practice Areas</button>
        <button>About Us</button>
      </div>
      <div className={styles.contactBtn}>
        <button>Contact Now</button>
      </div>
    </div>
  );
};

export default Navbar;

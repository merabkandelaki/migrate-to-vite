import React from 'react';
import LogoFooter from "../../assets/logo_footer.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_left}>
        <img
          className={styles.logo_footer}
          src={LogoFooter}
          alt="logo footer"
        />
        <span>COMM | React</span>
      </div>
      <span>&copy; 2024 kandelakimerab@gmail.com</span>
    </div>
  );
};

export default Footer;

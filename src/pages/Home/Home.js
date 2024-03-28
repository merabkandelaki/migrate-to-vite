import React from "react";
import Cover from "../../assets/Cover.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <img className={styles.home_img} src={Cover} alt="cover" />
    </div>
  );
};

export default Home;

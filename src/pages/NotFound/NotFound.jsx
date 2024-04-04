import React from "react";
import NotFoundPageImg from "../../assets/404_not_found.svg";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.not_found}>
      <div className={styles.image_title}>
        <img src={NotFoundPageImg} alt="" />
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;

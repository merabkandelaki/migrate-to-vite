import React from 'react';
import styles from "./Modal.module.css";
import { IoMdCloseCircle } from "react-icons/io";

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.modal}>
      {children}
      <button className={styles.close_button} onClick={onClose}>
        <IoMdCloseCircle />
      </button>
    </div>
  );
};

export default Modal;

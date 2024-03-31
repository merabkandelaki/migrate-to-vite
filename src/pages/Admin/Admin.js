import React, { useContext, useState } from "react";
import { FishContext } from "../../context/FishContext";
import CreateFishForm from "../../components/CreateFishForm/CreateFishForm";
import Modal from "../../components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import styles from "./Admin.module.css";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid username or password");
      setUsername("");
      setPassword("");
    }
  };

  const { addFish } = useContext(FishContext);
  const [createFish, setCreateFish] = useState(false);
  const navigate = useNavigate();
  const handleAddFish = (newFish) => {
    addFish(newFish);
    navigate("/fishes");
  };
  return (
    <div className={styles.admin_page}>
      <h2 className={styles.admin_page_title}>Admin Page</h2>
      {isAuthenticated ? (
        <>
          <button
            className={styles.add_fish_btn}
            onClick={() => setCreateFish(true)}
          >
            Create Fish
          </button>
          {createFish && (
            <Modal onClose={() => setCreateFish(false)}>
              <CreateFishForm onFishSubmit={handleAddFish} />
            </Modal>
          )}
        </>
      ) : (
        <form className={styles.verification} onSubmit={handleSubmit}>
          <label className={styles.verification_label}>
            Username:
            <input
              type="text"
              value={username}
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              className={styles.verification_values}
            />
          </label>
          <label className={styles.verification_label}>
            Password:
            <input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              className={styles.verification_values}
            />
          </label>
          <button className={styles.verification_submit} type="submit">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Admin;

import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from "./FishCard.module.css";

const FishCard = ({ img, name, region, scientificName }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [stars, setStars] = useState(0);

  const showFish = () => {
    console.log(`Fish Name: ${name}`);
    setIsShowing(true);
  };

  const handleStarClick = () => {
    setStars((prev) => prev + 1);
  };

  const renderStars = () => {
    let starIcons = "";

    for (let i = 0; i < stars; i++) {
      starIcons += "⭐";
    }
    return starIcons;
  };
  return (
    <>
      <div className={styles.fish}>
        <img className={styles.img} src={img} alt={name} />
        <div className={styles.description}>
          <p>Name: {name}</p>
          <p>Region: {region}</p>
          <p>Scientificname: {scientificName}</p>
          <button className={styles.show} onClick={() => showFish()}>
            Show
          </button>
        </div>
      </div>
      {isShowing && (
        <Modal onClose={() => setIsShowing(false)}>
          <img src={img} alt={name}></img>
          <p className={styles.modal_name}>Name: {name}</p>
          <span className={styles.stars}>
            Stars: {renderStars()}
            <span className={styles.emoji_star}>{stars}</span>
            <button
              className={styles.like}
              onClick={() => {
                if (stars < 10) {
                  handleStarClick();
                }
              }}
            >
              👍
            </button>
          </span>
        </Modal>
      )}
    </>
  );
};

export default FishCard;

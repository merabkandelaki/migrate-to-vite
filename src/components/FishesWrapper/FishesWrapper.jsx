import React from 'react';
import FishCard from '../FishCard/FishCard';
import styles from "./FishesWrapper.module.css";

const FishesWrapper = ({ fishes }) => {
  console.log("fishes", fishes);
  return (
    <div className={styles.fishes_list}>
      <h1>Species of Fishes</h1>
      <div className={styles.fishes_wrapper}>
        {fishes.map((fish, index) => {
          return (
            <FishCard
              key={index}
              img={fish?.illustrationPhoto?.src || fish?.img}
              name={fish.name}
              region={fish.region}
              scientificName={fish.scientificName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FishesWrapper;

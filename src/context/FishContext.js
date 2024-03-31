import React, { createContext, useState, useEffect } from 'react';
import { initialFishes } from '../data/fishes';

export const FishContext = createContext();

export const FishProvider = ({ children }) => {
  const [fishes, setFishes] = useState([]);

  useEffect(()=>{
    setFishes(initialFishes)
  }, [])

  const addFish = (newFish) => {
    setFishes([...fishes, newFish]);
  };

  return (
    <FishContext.Provider value={{ fishes, addFish }}>
      {children}
    </FishContext.Provider>
  );
};
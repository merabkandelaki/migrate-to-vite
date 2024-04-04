import React, { useContext } from "react";
import { FishContext } from "../../context/FishContext";
import FishesWrapper from "../../components/FishesWrapper/FishesWrapper";

const Fishes = () => {
  const { fishes } = useContext(FishContext);
  return (
    <div>
      <FishesWrapper fishes={fishes} />
    </div>
  );
};

export default Fishes;

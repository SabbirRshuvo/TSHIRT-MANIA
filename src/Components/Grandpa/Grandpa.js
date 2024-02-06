import React, { createContext, useState } from "react";
import Uncle from "../Uncle/Uncle";
import Father from "../Father/Father";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

// context api
// 1. creat context with a default value
export const RingContext = createContext('ring');


const Grandpa = () => {
  const [house, setHouse] = useState(1);

  

  const ornaments = "Diamond Ring";

  const handleBuyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };
  return (
    <RingContext.Provider value="alur ring">
      <div className="grandpa">
        <h4>Grandpa</h4>

        <p>
          House : {house} <button onClick={handleBuyAHouse}>Buy a House</button>
        </p>
        <div style={{ display: "flex" }}>
          <Father house={house} ornaments={ornaments}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;

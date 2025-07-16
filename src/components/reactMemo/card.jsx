import React, { memo } from "react";

const Card = ({ state1 }) => {
  console.log("card rendered");
  
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: state1 ? "blue" : "red",
        marginTop: "10px",
      }}
    >
      card
    </div>
  );
};

export default memo(Card);

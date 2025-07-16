import React, { memo } from "react";

const BigIncrement = ({ handleCount }) => {
  console.log("big increment rendered");

  return (
    <div>
      <button onClick={handleCount}>Big Increment</button>
    </div>
  );
};

export default memo(BigIncrement);

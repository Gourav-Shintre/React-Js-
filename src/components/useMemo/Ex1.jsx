import React, { memo } from "react";

const Ex1 = ({ fruits }) => {
  console.log(" ex1 rendered");

  return <div>Ex1</div>;
};

export default memo(Ex1);

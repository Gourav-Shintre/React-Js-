import React from "react";

const Greetings3 = ({ items }) => {
  console.log(items);

  return (
    <div>
      Greetings3
      <ul>
        <li>{items.name}</li>
      </ul>
    </div>
  );
};

export default Greetings3;

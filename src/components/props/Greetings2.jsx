import React from "react";
import Greetings3 from "./Greetings3";

const Greetings2 = ({ children, name }) => {
  const users = [
    {
      name: "gourav",
      age: 22,
    },
    {
      name: "anna",
      age: 25,
    },
    {
      name: "bond",
      age: 32,
    },
  ];
  return (
    <div>
      Greetings2
      {children[1]}
      {name}
      {users.map((user) => (
        <Greetings3 key={user.name} items={user} />
      ))}
    </div>
  );
};

export default Greetings2;

import React, { useState } from "react";
import UserList from "./UserList";

const StateExample2 = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "gourav Shintre",
      age: 22,
    },
    {
      id: 2,
      name: "anna bond",
      age: 32,
    },
    {
      id: 3,
      name: "yevel",
      age: 22,
    },
  ]);
  return (
    <div>
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
};

export default StateExample2;

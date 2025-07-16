import React, { use, useMemo, useState } from "react";

const Ex2 = () => {
  const users = [
    { id: 1, name: "Anna", isActive: true },
    { id: 2, name: "Ravi", isActive: false },
    { id: 3, name: "Neha", isActive: true },
    { id: 4, name: "Vikram", isActive: false },
    { id: 5, name: "Sana", isActive: true },
    { id: 6, name: "Aditya", isActive: false },
    { id: 7, name: "Priya", isActive: true },
    { id: 8, name: "Karan", isActive: true },
  ];
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  const filteredUsers = useMemo(() => {
    console.log("filtering");

    const result = users.filter((user) => user.isActive === true);
    return result;
  }, [active]);

  return (
    <div>
      <h3>Users List</h3>
      <label htmlFor="">active users</label>
      <input
        type="checkbox"
        value={active}
        checked={active}
        onChange={() => setActive(!active)}
      />
      {(active ? filteredUsers : users).map((user) => (
        <ol key={user.id} style={{ backgroundColor: "black", color: "white" }}>
          <li>{user.name}</li>
          <li>{user.isActive ? "active" : "inactive"}</li>
        </ol>
      ))}
      <hr />
      Count : {count}
      <button onClick={() => setCount((prev) => prev + 1)}>increse</button>
    </div>
  );
};

export default Ex2;

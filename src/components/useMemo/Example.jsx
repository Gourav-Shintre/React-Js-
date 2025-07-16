import React, { useMemo, useState } from "react";
import Ex1 from "./Ex1";

const Example = () => {
  console.log("example rendered");

  const [username, setusername] = useState("");
  const fruits = useMemo(() => {
    return [
      {
        1: "bananna",
      },
    ];
  }, []);

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="enter"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <Ex1 fruits={fruits} />
    </div>
  );
};

export default Example;

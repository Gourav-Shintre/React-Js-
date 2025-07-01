import React from "react";
import Greetings2 from "./props/Greetings2";

const Greetings = () => {
  let name ="greetings 1"
  return (
    <>
      <div>Greetings</div>
      <Greetings2 name={name}>
        <p>hello boy i am greetings 2</p>
        <h1>Heellloooo....</h1>
      </Greetings2>
    </>
  );
};

export default Greetings;

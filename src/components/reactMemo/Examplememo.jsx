import React, { useState } from "react";
import Card from "./card";

const Examplememo = () => {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  console.log('demo rendered');
  
  return (
    <div>
      <label htmlFor="state1">State1</label>
      <input
        type="checkbox"
        name="state1"
        id="state1"
        value={state1}
        onChange={() => setState1(!state1)}
        checked={state1}
      />
      <label htmlFor="state2">State2</label>
      <input
        type="checkbox"
        name="state2"
        id="state2"
        value={state2}
        onChange={() => setState2(!state2)}
        checked={state2}
      />
      <Card state1={state1} />
    </div>
  );
};

export default Examplememo;

import React, { useCallback, useState } from "react";
import BigIncrement from "./BigIncrement";

const ExCallBack = () => {
  console.log("parent rendered");
  const [count, setCount] = useState(0);
  // () => {
  //   setCount((prev) => prev + 100);
  // };
  const handleCount = useCallback(() => {
    setCount((prev) => prev + 100);
  }, []);
  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(count + 1)}>increment</button>
      <BigIncrement handleCount={handleCount} />
    </div>
  );
};

export default ExCallBack;

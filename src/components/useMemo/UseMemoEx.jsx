import React, { memo, useMemo, useState } from "react";
const ExpensiveCal = () => {
  const total = useMemo(() => {
    let sum = 0;

    for (let i = 0; i <= 1000000000; i++) {
      sum += i
    }

    return sum;
  }, []);

  return (
    <>
      <h1>total : {total}</h1>
    </>
  );
};
const UseMemoEx = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <ExpensiveCal />
      <button value={count} onClick={() => setCount(count + 1)}>
        clickk
      </button>
      <div>count : {count}</div>
    </>
  );
};

export default UseMemoEx;

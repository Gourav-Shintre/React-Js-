import React, { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    console.log(state, "state");

    if (action.type === "increment") {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    if (action.type === "decrement") {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    if (action.type === "reset") {
      return {
        ...state,
        count: (state.count = 0),
      };
    }
  };
  const initialState = { count: 0 };
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log(count);

  const handleIncrement = () => {
    dispatch({
      type: "increment",
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "decrement",
    });
  };

  const reset = () => {
    dispatch({
      type: "reset",
    });
  };

  return (
    <>
      <h1>UseReducer</h1>
      <h2>Count : {count.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default UseReducer;

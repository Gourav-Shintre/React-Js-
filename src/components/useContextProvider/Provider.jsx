import React, { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const TodoContext = createContext();
const Provider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      status: false,
    },
    {
      id: 2,
      title: "Drink Water",
      status: true,
    },
  ]);

  return (
    <div>
      <TodoContext.Provider value={{ todos , setTodos }}>{children}</TodoContext.Provider>
    </div>
  );
};

export default Provider;

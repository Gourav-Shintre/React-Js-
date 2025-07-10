import React, { useReducer, useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

const UseReducerTodo = () => {
  const [todo, setTodo] = useState("");

  const reducer = (todos, action) => {
    console.log(todos, "stat");
    console.log(action);
    if (action.type === "DELETE") {
      console.log("deleting");
      console.log(action.payload.id, "action id");

      return todos.filter((todo) => todo.id !== action.payload.id);
    }
    if (action.type === "toggleTodo") {
      console.log("toggling");
      return todos.map((todo) => {
        console.log(todo.id, "todo.id ");
        console.log(action.payload.id, "action.payload.id");

        if (todo.id === action.payload.id) {
          return {
            ...todo,
            status: !todo.status,
          };
        } else {
          return todo;
        }
      });
    }

    if (action.type === "addTodo") {
      return [
        ...todos,
        {
          title: todo,
          id: uuid(),
          status: false,
        },
      ];
    }

    return todos;
  };

  const inititalState = [
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
  ];
  const [todos, dispatch] = useReducer(reducer, inititalState);
  const handleOnchange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "addTodo",
    });
    setTodo("")
  };

  return (
    <div>
      <h1>Todo using userReducer</h1>
      <input type="text" name="" id="" value={todo} onChange={handleOnchange} />
      <button onClick={handleSubmit}>Add todo</button>
      {todos.map((todo) => (
        <TodoList todo={todo} key={todo.id} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default UseReducerTodo;

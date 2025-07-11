import React, { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";
const TodoForm = () => {
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
  const [todo, setTodo] = useState("");

  const handleChangeTodo = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: uuid(),
        title: todo,
        status: false,
      },
    ]);
    setTodo("");
  };

  const handleStatus = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: !todo.status,
          };
        } else {
          return todo;
        }
      });
    });
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <input type="text" value={todo} onChange={handleChangeTodo}></input>
      <button onClick={handleSubmit} disabled={todo.trim().length === 0}>
        Add
      </button>
      <TodoLi
      st
        todos={todos}
        handleDelete={handleDelete}
        handleStatus={handleStatus}
      />
    </>
  );
};

export default TodoForm;

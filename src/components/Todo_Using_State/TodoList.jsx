import React from "react";
import TodoListItems from "./TodoListItems";

const TodoList = ({ todos, handleDelete, handleStatus }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoListItems todo={todo} key={todo.id} handleDelete={handleDelete} handleStatus={handleStatus} />
      ))}
    </>
  );
};

export default TodoList;

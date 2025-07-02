import React from "react";

const TodoListItems = ({ todo, handleDelete, handleStatus }) => {
  return (
    <div>
      <p>{todo.title}</p>
      <input
        type="checkbox"
        checked={todo.status}
        onChange={() => handleStatus (todo.id)}
      />
      <button onClick={() => handleDelete(todo.id)}>delete todo</button>
    </div>
  );
};

export default TodoListItems;

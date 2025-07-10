import React from "react";

const TodoList = ({ todo, dispatch }) => {
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "DELETE",
      payload: {
        id: id,
      },
    });
  };

  const handleStatusTodo = () => {
    dispatch({
      type: "toggleTodo",
      payload: {
        id: todo.id,
      },
    });
  };
  return (
    <div style={{ backgroundColor: "grey" }}>
      <h3>titile : {todo.title ?? "--"}</h3>
      <h3>Status : {todo.status === true ? "completed" : "not completed"}</h3>
      <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
      <input
        type="checkbox"
        onClick={handleStatusTodo}
        checked={todo.status}
      />
    </div>
  );
};

export default TodoList;

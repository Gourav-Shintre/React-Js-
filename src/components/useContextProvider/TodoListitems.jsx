import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "./Provider";
import { v4 as uuid } from "uuid";
const TodoListitems = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  console.log(todos);
  const handleDelete = (id) => {
    console.log("deleting");
    console.log(id);

    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };
  const handleOnchange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    setTodos((prevTodo) => [
      ...prevTodo,
      {
        id: uuid(),
        title: todo,
        status: false,
      },
    ]);
    setTodo("")
  };

  return (
    <div>
      <input type="text" name="" id="" value={todo} onChange={handleOnchange} />
      <button onClick={handleClick}>Add</button>
      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <p>id : {todo.id}</p>
          <p>name : {todo.title}</p>
          <p>status : {todo.status ? "completed" : "not completed"}</p>
          <button onClick={() => handleDelete(todo.id)}>delete</button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TodoListitems;

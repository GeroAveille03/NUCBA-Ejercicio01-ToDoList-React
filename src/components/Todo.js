import React from "react";

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckBoxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <input
        type="checkbox"
        onClick={handleCheckBoxClick}
        style={{ border: "1px solid black" }}
      />
      <li
        style={{
          textDecoration: todo.completed ? "line-through" : null,
          color: "black",
          listStyle: "none",
          fontSize: "1.4em",
        }}
      >
        {todo.task}
      </li>
      <button
        onClick={handleRemoveClick}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          backgroundColor: "#ad790b",
          border: "1px solid black",
          marginLeft: "2%",
          height: "18px",
          width: "22px",
        }}
      >
        X
      </button>
    </div>
  );
};

export default Todo;

import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: Math.floor(Math.random() * 10000) });

      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={handleSubmit}
    >
      <input
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
        placeholder="Agregá acá la nueva tarea"
        maxLength="23"
        style={{
          width: "300px",
          height: "25px",
          border: "none",
          borderRadius: "3px",
        }}
      />
      <button
        style={{
          width: "50%",
          height: "25px",
          marginTop: "2%",
          border: "1px solid black",
          borderRadius: "3px",
          cursor: "pointer",
          backgroundColor: "#ad790b",
        }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default TodoForm;

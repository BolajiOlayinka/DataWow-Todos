import React, { useState, useContext } from "react";
import "./TodoForm.modules.css";
import axios from "axios";
import { AppContext } from "../Context";

export default function TodoForm(props) {
  const [text, setText] = useState("");
  const { dispatchAddEvent, fetchAllTodos } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/todos", { title: text, completed: false })
      .then((res) => {
        setText("");
        dispatchAddEvent();
        fetchAllTodos();
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="input"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add your todos"
      />
    </form>
  );
}

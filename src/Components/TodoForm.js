import React, { useState } from "react";
import "./TodoForm.modules.css";

export default function TodoForm() {
  const [text, setText] = useState("");

  // const handleChange =(event)=>{
  //     this.setState({
  //         [event.target.name]:event.target.value
  //     })
  // }
  const handleSubmit = (e, props) => {
    e.preventDefault();
    // props.onSubmit({
    //   // id:shortid.generate(),
    //   text: text,
    //   complete: false,
    // });
    // setText({ text });
    console.log(text)
    //submit the form
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="form"
    >
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

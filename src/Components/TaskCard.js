import React, { useState,useContext } from "react";
import "./TaskCard.modules.css";
import ellipse from "../assets/ellipse.svg";
import axios from "axios";
import { AppContext } from "../Context";

export default function TaskCard(props) {
  const complete = { props };
  // console.log(complete);

  const [checked, setChecked] = useState(complete.props.item.completed);
  const [isShowSelect, setIsShowSelect] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] =useState(props.item.title);
  const { fetchAllTodos } = useContext(AppContext);
  

  const handleClicked = () => {
    axios
      .patch(
        `http://localhost:9000/todos/${complete.props.item.id}`,
        { completed: !complete.props.item.completed },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        
        complete.props.fetchAllTodos();
        setChecked(res.data.completed);
      })
      .catch((err) => console.log(err.message));
  };
  const handleDelete = (e) => {
    setIsShowSelect(true);
    axios.delete(`http://localhost:9000/todos/${complete.props.item.id}`)
    .then(res => {
        // console.log(res.data)
        fetchAllTodos()
    })
    .catch(err => console.log(err.message))
  };
  const handleEditChange = (e) => {
    setIsEdit(true);
  };
 
  const handleEdit = (e) => {
    axios.patch(`http://localhost:9000/todos/${complete.props.item.id}`, 
    { "title": text }, { headers: { "Content-Type": "application/json" } })
    .then(res => {
        console.log(res.data)
        fetchAllTodos()
    })
    .catch(err => console.log(err.message))
setIsEdit(false)
    

  };
  
  return (
    <div className="taskcard-wrapper">
      <div className="input-group">
        {isEdit === true ? (
          <input
            style={{ color: "#2E2E2E" }}
            className="input-edit"
            value={text}
            onChange={(e)=>setText(e.target.value)}
          />
        ) : (
          <>
            <input
              type="checkbox"
              name="check box"
              checked={checked}
              onChange={() => {
                handleClicked();
              }}
              value="check"
            />
            <div
              onInput={(e) => this.handleInput(e)}
              style={{
                color: complete.props.item.completed
                ? "#A9A9A9"
                : "##2E2E2E",
                
                textDecoration: complete.props.item.completed
                  ? "line-through"
                  : "",
              }}
              className="card-label"
            >
              {props.item.title}
            </div>
          </>
        )}
      </div>

      {isEdit === false ? (
        <div
          className="ellipse-container"
          onClick={() => setIsShowSelect(!isShowSelect)}
        >
          <>
            <img src={ellipse} alt="todos ellipse" />
            <div
              className="ellipse-dropdown"
              onClick={() => setIsShowSelect(false)}
              style={{
                display: isShowSelect ? "flex" : "none",
                transition: "all 1s ease",
              }}
            >
              <button
                className="ellipse-button"
                onClick={handleEditChange}
                value="Edit"
              >
                Edit
              </button>
              <button
                className="ellipse-button"
                onClick={handleDelete}
                value="Delete"
              >
                Delete
              </button>
            </div>
          </>
        </div>
      ) : (
        <button className="edit-button" onClick={handleEdit}>
          Save
        </button>
      )}
    </div>
  );
}

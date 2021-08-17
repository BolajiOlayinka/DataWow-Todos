import React, { useState } from "react";
import "./TaskCard.modules.css";
import ellipse from "../assets/ellipse.svg";
import axios from "axios";

export default function TaskCard(props) {
  const complete = { props };
  console.log(complete);
  // const { refreshData } = useContext(AppContext);
  // const dispatch = complete.props.completedispatch
  // console.log(complete)

  const [checked, setChecked] = useState(complete.props.item.completed);
  const [isShowSelect, setIsShowSelect] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  // const [selectname, setSelectName] = useState("All");

  const handleClicked = () => {
    axios
      .patch(
        `http://localhost:9000/todos/${complete.props.item.id}`,
        { completed: !complete.props.item.completed },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log(res.data);
        complete.props.fetchAllTodos();
        setChecked(res.data.completed);
      })
      .catch((err) => console.log(err.message));
  };
  const handleDropDownChange = (e) => {
    // setSelectName(e.target.value);
    setIsShowSelect(true);
  };
  const handleEditChange = (e) => {
    setIsEdit(true);
  };
  const handleEdit = (e) => {
    setIsEdit(false);
  };
  // console.log(props)

  // console.log(complete.props.item.completed)
  return (
    <div className="taskcard-wrapper">
      <div className="input-group">
        {isEdit === true ? (
          <div
            style={{ color: "#2E2E2E" }}
            className="card-label-edit"
            contentEditable="true"
          >
            {props.item.title}
          </div>
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
                color: "#2E2E2E",
                textDecoration: complete.props.item.completed
                  ? "line-through"
                  : "",
              }}
              className="card-label"
              contentEditable="false"
              defaultValue=""
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
                onClick={handleDropDownChange}
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

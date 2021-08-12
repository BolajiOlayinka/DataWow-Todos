import React, { useState } from "react";
import "./TaskCard.modules.css";
import ellipse from "../assets/ellipse.svg";

export default function TaskCard() {
  const [checked, setChecked] = useState(false);
  const [isShowSelect, setIsShowSelect] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectname, setSelectName] = useState("All");
  const handleClicked = () => {
    setChecked(!checked);
  };
  const handleDropDownChange = (e) => {
    setSelectName(e.target.value);
    setIsShowSelect(true);
  };

  return (
    <div className="taskcard-wrapper">
      <div className="input-group">
        <input
          type="checkbox"
          name="check box"
          checked={checked}
          onChange={handleClicked}
          value="check"
        />
        <label
          htmlFor="taskcard"
          style={{ color: "#2E2E2E" }}
          className="card-label">
          My task is this and this
        </label>
      </div>
      <div className="ellipse-container" onClick={() => setIsShowSelect(!isShowSelect)}>
        <img src={ellipse} alt="todos ellipse" />
        <div
        className="ellipse-dropdown"
        onClick={() => setIsShowSelect(false)}
        style={{
          display: isShowSelect ? "flex" : "none",
          transition: "all 1s ease",
        }}>
        <button
          className="ellipse-button"
          onClick={handleDropDownChange}
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
      </div>
      
    </div>
  );
}

import React, { useState } from "react";
// import Context from '../Context';
import "./TaskList.modules.css";
import Card from "./TaskCard";
import arrowDown from "../assets/arrow-down.svg";

export default function TaskList() {
  const [isShowSelect, setIsShowSelect] = useState(false);
  const { selectProgress, setSelectProgress } = useState();
  const [selectname, setSelectName] = useState("All");
  const handleDropDownChange = (e) => {
    setSelectName(e.target.value);
    setIsShowSelect(true);
  };
  console.log(isShowSelect)

  return (
    <div className="tasklist-wrapper">
      <div className="tasklist-header">
        <div className="tasklist-title">Tasks</div>
        <div className="task-dropdown">
          <button
            className="dropbtn"
            onClick={() => setIsShowSelect(!isShowSelect)}>
            {selectProgress}
            {selectname}
            <img src={arrowDown} alt="dropdown" style={{ width: "8px" }} />
          </button>
          <div
            className="dropdown-container"
            onClick={() => setIsShowSelect(!isShowSelect)}
            style={{
              display: isShowSelect ? "flex" : "none",
              transition: "all 1s ease",
            }}>
            <button
              className="select-button"
              onClick={handleDropDownChange}
              value="All">
              All
            </button>
            <button
              className="select-button"
              onClick={handleDropDownChange}
              value="Done">
              Done
            </button>
            <button
              className="select-button"
              onClick={handleDropDownChange}
              value="Undone">
              Undone
            </button>
          </div>
        </div>
      </div>
      <Card />
    </div>
  );
}

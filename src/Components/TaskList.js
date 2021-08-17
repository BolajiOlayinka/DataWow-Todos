import React, { useState } from "react";
import "./TaskList.modules.css";
import Card from "./TaskCard";
import arrowDown from "../assets/arrow-down.svg";
import { AppConsumer } from "../Context";

export default function TaskList(props) {
  const [isShowSelect, setIsShowSelect] = useState(false);
  const [selectname, setSelectName] = useState("All");
  const handleDropDownChange = (e) => {
    setSelectName(e.target.value);
    setIsShowSelect(true);
  };

  return (
    <div className="tasklist-wrapper">
      <div className="tasklist-header">
        <div className="tasklist-title">Tasks</div>
        <div className="task-dropdown">
          <button
            className="dropbtn"
            onClick={() => setIsShowSelect(!isShowSelect)}
          >
            {selectname}
            <img src={arrowDown} alt="dropdown" style={{ width: "8px" }} />
          </button>
          <div
            className="dropdown-container"
            onClick={() => setIsShowSelect(!isShowSelect)}
            style={{
              display: isShowSelect ? "flex" : "none",
              transition: "all 1s ease",
            }}
          >
            <button
              className="select-button"
              onClick={handleDropDownChange}
              value="All"
            >
              All
            </button>
            <button
              className="select-button"
              onClick={handleDropDownChange}
              value="Done"
            >
              Done
            </button>
            <button
              className="select-button"
              onClick={handleDropDownChange}
              value="Undone"
            >
              Undone
            </button>
          </div>
        </div>
      </div>

      <AppConsumer>
        {(value) => {
          const { AllTodos, fetchAllTodos } = value;
          if (AllTodos === undefined || AllTodos.length === 0) {
            return <h2>...</h2>;
          } else {
            return (
              <>
                {AllTodos.filter((todo) => {
                  switch (selectname) {
                    case "All":
                      return true;
                    case "Done":
                      return todo.completed;
                    case "Undone":
                      return !todo.completed;
                    default:
                      return true;
                  }
                }).map((item) => (
                  <Card
                    item={item}
                    key={item.id}
                    fetchAllTodos={fetchAllTodos}
                  />
                ))}
              </>
            );
          }
        }}
      </AppConsumer>
    </div>
  );
}

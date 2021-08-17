import React from "react";
import "./Progress.modules.css";
// import Context from '../Context';
import { AppConsumer } from "../Context";

export default function Progress() {
  // const { progress, todoList } = useContext(Context);
  return (
    <div className="wrapper">
      <div className="title">Progress</div>
      <AppConsumer>
        {(value) => {
          return (
            <>
              <div className="progress-container">
                <div
                  className="progress-meter"
                  style={{ width: `${value.progressvalue}%` }}
                ></div>
              </div>
              <div className="subTitle">{value.completed} completed</div>
            </>
          );
        }}
      </AppConsumer>
    </div>
  );
}

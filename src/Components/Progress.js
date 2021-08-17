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
              <progress
                className="progressWrapper"
                id="progessbar"
                max="100"
                value={value.progressvalue}
              >
                {" "}
                70%
              </progress>
              <div className="subTitle">{value.completed} completed</div>
            </>
          );
        }}
      </AppConsumer>
    </div>
  );
}

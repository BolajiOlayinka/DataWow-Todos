import React from "react";
import "./TaskList.modules.css";
import Card from './TaskCard';

export default function TaskList() {
  return (
    <div className="tasklist-wrapper">
      <div className="tasklist-header">
        <div className="tasklist-title">Tasks</div>
        <select id="task-dropdown" name="tasks">
        <option value="All">All</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
        </select>
      </div>
      <Card/>
    </div>
  );
}

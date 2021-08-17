import React from 'react';
import Progress from './Progress';
import TaskList from './TaskList';
import TodoForm from './TodoForm';
import './Todo.modules.css';

export default function Todo() {
    return (
        <>
        <div className="container">
            <div className ="content">
            <Progress/>
            <TaskList/>
            <TodoForm/>
            </div>
            
        </div>
        </>
    )
}

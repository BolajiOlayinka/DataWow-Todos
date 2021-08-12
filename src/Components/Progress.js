import React from 'react';
import './Progress.modules.css';
// import Context from '../Context';

export default function Progress() {
    // const { progress, todoList } = useContext(Context);
    return (
        <div className="wrapper">
            <div className="title">
                Progress
            </div>
            <progress className="progressWrapper" id="progessbar" max="100" value="80"> 70%</progress>
            <div className="subTitle">
                12 completed
            </div>
        </div>
    )
}

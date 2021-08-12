import React from 'react';
import './Progress.modules.css';

export default function Progress() {
    
    return (
        <div className="wrapper">
            <div className="title">
                Progress
            </div>
            <progress className="progressWrapper" id="progessbar" max="100" value="80"> 70% </progress>
            <div className="subTitle">
                12 completed
            </div>
        </div>
    )
}

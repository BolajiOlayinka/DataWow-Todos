import React,{useState} from 'react';
import './TaskCard.modules.css';
import ellipse from '../assets/ellipse.svg';

export default function TaskCard() {
    const [checked, setChecked]=useState(false)
    const handleClicked =()=>{
        setChecked(!checked)
    }
    return (
        <div className="taskcard-wrapper">
            <div className="input-group">
            <input type ="checkbox" name="check box" checked={checked} onClick={ handleClicked} value="check"/>
            <label htmlFor="taskcard" style={{color:"#2E2E2E"}} className="card-label">My task is this and this</label>
            </div>
            <div><img src={ellipse} alt="todos ellipse"/></div>
            

        </div>
    )
}

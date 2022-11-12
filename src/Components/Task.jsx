import React, { useState, useRef } from 'react';
import "./Task.css";

const Task = () => {
    const [taskActive, setTaskActive] = useState(false);
    const [pomNum, setPomNum] = useState(1);
    // const taskRef = useRef(taskActive);

    const pomodoroNum = (e) => {
        const numb = e.target.value
        if (numb === "")
            setPomNum(e.target.value)

        if (numb.match(/^[0-9]+$/) && numb < 50)
            setPomNum(e.target.value)
        else 
            console.log("Invalid value");
    }

    return (
        <div className='task-component'>
            <div className='task-header'>
                <h5>Tasks</h5>
                <button><img alt="options" src="https://pomofocus.io/icons/threedots-white.png" /></button>
            </div>
            {
                taskActive ? 
                <div className="new-task">
                    <input type="text" className="task-name" placeholder="What are you working on?"/>
                    <b>Est Pomodoros</b>
                    <input type="text" value={pomNum} onChange={(ev) => {pomodoroNum(ev)}}/>
                    <div>
                        <button onClick={() => setTaskActive(false)}>Cancel</button>
                        <button onClick={() => setTaskActive(false)}>Save</button>
                    </div>
                </div>
                :
                <div className='add-task' onClick={() => setTaskActive(true)}>
                    <img alt="" src="https://pomofocus.io/icons/plus-circle-white.png" />
                    <p>Add Task</p>
                </div>
            }
        </div>
    )
}

export default Task;
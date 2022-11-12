import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./Task.css";

const Task = () => {
    const [taskActive, setTaskActive] = useState(false);
    const [pomNum, setPomNum] = useState(1);
    const [curTask, setCurTask] = useState(0);
    // Add tasks to local storage
    const [tasklist, setTasklist] = useState([]);
    // const taskRef = useRef(taskActive);

    const handleTasks = () => {
        const taskName = document.getElementsByClassName("task-name")[0].value;
        const taskCount = document.getElementsByClassName("pomodoro-num")[0].value;
        const newList = tasklist.concat({taskname: taskName, taskcount: taskCount});
        setTasklist(newList);

        setTaskActive(false);
    }

    const pomodoroNum = (e) => {
        const numb = e.target.value
        if (numb === "")
            setPomNum(e.target.value)

        if (numb.match(/^[0-9]+$/) && numb < 1000)
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

            {tasklist.map((item) => {
                return (
                <div 
                    key={uuidv4()}
                    className="task-item"
                    >
                    <img className='task-item-img' src="https://cdn-icons-png.flaticon.com/512/1008/1008958.png" />
                    <p className='task-item-p1'>{item.taskname}</p>
                    <p className='task-item-p2'>{curTask}/{item.taskcount}</p>
                    <button className='task-item-button'>
                        <img alt="options" src="https://pomofocus.io/icons/vertical-ellipsis.png" />
                    </button>
                </div>
                )
            })}
            {
            taskActive ? 
            <div className="new-task">
                <div className='conf-area'>
                    <input type="text" className="task-name" placeholder="What are you working on?"/>
                    <p>Est Pomodoros</p>
                    <div className="pom-input">
                        <input className='pomodoro-num' type="text" value={pomNum} onChange={(ev) => {pomodoroNum(ev)}}/>
                        <button className='pomo-controls' onClick={() => {if (pomNum < 999) setPomNum(Number(pomNum)  + 1)}}>▲</button>
                        <button className='pomo-controls' onClick={() => {if (pomNum > 1) setPomNum(pomNum  - 1)}}>▼</button>
                    </div>
                </div>
                <div className='action-area'>
                    <button onClick={() => setTaskActive(false)}>Cancel</button>
                    <button onClick={handleTasks}>Save</button>
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
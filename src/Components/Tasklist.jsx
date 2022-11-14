import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from "./Task";
import "./Tasklist.css";

const Tasklist = () => {
    // States
    const [taskActive, setTaskActive] = useState(false);
    const [pomNum, setPomNum] = useState(1);
    const [tasklist, setTasklist] = useState([]);
    
    // Refs
    const bottomRef = useRef(document.getElementsByClassName("dummy-bottom"))   
    const inputRef = useRef(document.getElementsByClassName("task-name"))
    
    useEffect(() => {    
        return () => {
          const taskList = JSON.parse(localStorage.getItem('task-list'))
          if (taskList?.length > 0) {
              setTasklist(taskList)
          }
      }
    }, [])
  
    useEffect(() => {    
        return () => {
            if (inputRef.current != null && inputRef.current.length !== 0) {
                inputRef.current.focus();
            }
            bottomRef.current.scrollIntoView({ behavior: "smooth"})
        }
    }, [taskActive])

    const addTasks = () => {
        const taskName = document.getElementsByClassName("task-name")[0].value;
        const taskCount = document.getElementsByClassName("pomodoro-num")[0].value;
        
        if (taskName !== '') {
            const newList = tasklist.concat({id: uuidv4(), taskname: taskName, taskcount: taskCount, selected: false});
            window.localStorage.setItem('task-list', JSON.stringify(newList))
            setTasklist(newList);
            setTaskActive(false);
        }
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

    const handleSelectTask = (arrItem) => {
        setTaskActive(true)
        console.log('a')
        tasklist.forEach((item) => {item.selected = false})
        arrItem.selected = true
        setTaskActive(false)
    }

    return (
        <div className='task-component'>
            <div className='task-header'>
                <h5>Tasks</h5>
                <button><img alt="options" src="https://pomofocus.io/icons/threedots-white.png" /></button>
            </div>

            {/* task list */}
            {
                tasklist.length > 0 ?
                <div className='tasks-list'>
                    {tasklist.map((item) => {
                        return ( <Task key={item.id} item={item} handleSelectTask={handleSelectTask} /> )
                    })}
                </div>
                :
                ''
            }

            {/* add task component */}
            {
                taskActive ? 
                <div className="new-task">
                    <div className='conf-area'>
                        <input ref={inputRef} type="text" className="task-name" placeholder="What are you working on?"/>
                        <p>Est Pomodoros</p>
                        <div className="pom-input">
                            <input className='pomodoro-num' type="text" value={pomNum} onChange={(ev) => {pomodoroNum(ev)}}/>
                            <button className='pomo-controls' onClick={() => {if (pomNum < 999) setPomNum(Number(pomNum)  + 1)}}>▲</button>
                            <button className='pomo-controls' onClick={() => {if (pomNum > 1) setPomNum(Number(pomNum)  - 1)}}>▼</button>
                        </div>
                    </div>
                    <div className='action-area'>
                        <button onClick={() => setTaskActive(false)}>Cancel</button>
                        <button onClick={addTasks}>Save</button>
                    </div>
                </div>
                :
                <div className='add-task' onClick={(e) => {setTaskActive(true)}}>
                    <img alt="" src="https://pomofocus.io/icons/plus-circle-white.png" />
                    <p>Add Task</p>
                </div>
            }
            <div ref={bottomRef} className="dummy-bottom"></div>
        </div>
    )
}

export default Tasklist;
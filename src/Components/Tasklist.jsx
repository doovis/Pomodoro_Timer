import React, { useState, useRef, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from "./Task";
import "./Tasklist.css";

const Tasklist = ({taskCountRef}) => {
    const listInit = () => {
        return localStorage.getItem('task-list')
            ? JSON.parse(localStorage.getItem('task-list'))
            : []
    }

    // States
    const [addTaskActive, setAddTaskActive] = useState(false);
    const [pomNum, setPomNum] = useState(1);
    // const [curTask, setCurTask] = useState(0);
    const [dropMenu, setDropMenu] = useState(false);
    const [tasklist, setTasklist] = useState(() => listInit())
    const [selectedTask, setSelectedTask] = useState(tasklist?.filter(task => task.selected === true)[0]);
    
    // Refs
    const divRef = useRef(null);
    const bottomRef = useRef(document.getElementsByClassName("dummy-bottom"))   
    const inputRef = useRef(document.getElementsByClassName("task-name"))

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.addEventListener('click', handleOutsideClick);
        }
    }, [divRef])

    const handleOutsideClick = (event) => {
        if (divRef.current && !divRef.current.contains(event.target.nextElementSibling)) {
            setDropMenu(false);
        }
    }

    useEffect(() => {    
        return () => {
            if (inputRef.current != null && inputRef.current.length !== 0) {
                inputRef.current.focus();
            }
            bottomRef.current.scrollIntoView({ behavior: "smooth"})
        }
    }, [addTaskActive])
    
    const pomodoroNum = (e) => {
        const numb = e.target.value
        if (numb === "")
        setPomNum(e.target.value)
        
        if (numb.match(/^[0-9]+$/) && numb < 1000)
        setPomNum(e.target.value)
        else 
        console.log("Invalid value");
    }

    const addTasks = () => {
        const taskName = document.getElementsByClassName("task-name")[0].value;
        const taskCount = document.getElementsByClassName("pomodoro-num")[0].value;
        
        if (taskName !== '' && pomNum > 0) {
            const newTask = {id: uuidv4(), taskname: taskName, taskcount: taskCount, selected: false}

            
            if (tasklist.length === 0) {
                newTask.selected = true;
                setSelectedTask(newTask)
            }
            const newList = tasklist.concat(newTask)
            window.localStorage.setItem('task-list', JSON.stringify(newList))
            
            setTasklist(newList);
            inputRef.current.value = ''
            setPomNum(1)
            inputRef.current.focus();
        }
    }
    
    const handleSelectTask = (task) => {
        tasklist.forEach((item) => {item.selected = false})
        task.selected = true
        setSelectedTask(task)
        window.localStorage.setItem('task-list', JSON.stringify(tasklist))
    }
    
    const handleRemoveTask = (e, task) => {
        e.stopPropagation();
        const removedList = tasklist.filter((item) => item !== task)
        
        if (task.selected) {
            setSelectedTask(null)
        }
        
        setTasklist(removedList)
        window.localStorage.setItem('task-list', JSON.stringify(removedList))
    }
    
    const handleRemoveAllTasks = () => {
        setTasklist([])
        window.localStorage.setItem('task-list', [])
        setDropMenu(false)
        setSelectedTask(null)
    }

    const handleDropMenu = () => {
        setDropMenu((prev) => !prev)
    }

    return (
        <div className='task-component' >
            <div className='task-title'>
                <p>{selectedTask ? selectedTask.taskname : "Time to focus!"}</p>
            </div>
            <div className='task-header'>
                <h5>Tasks</h5>
                <button onClick={handleDropMenu}></button>
                {
                dropMenu ?
                    <div className='drop-menu' ref={divRef}>
                        <div className='drop-menu-element' onClick={handleRemoveAllTasks}>
                            <img src='https://pomofocus.io/icons/delete-black.png' />
                            <p>Clear all tasks</p>
                        </div>
                    </div>
                    :
                    ""
                }
            </div>

            {/* task list */}
            {
                tasklist.length > 0 ?
                <div className='tasks-list'>
                    {tasklist.map((item) => {
                        return (
                            <Task key={item.id} item={item} taskCountRef={taskCountRef} handleSelectTask={handleSelectTask} handleRemoveTask={handleRemoveTask} />
                        )
                    })}
                </div>
                :
                ''
            }

            {/* add task component */}
            {
                addTaskActive ? 
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
                        <button onClick={() => setAddTaskActive(false)}>Cancel</button>
                        <button onClick={addTasks}>Save</button>
                    </div>
                </div>
                :
                <div className='add-task' onClick={(e) => {setAddTaskActive(true)}}>
                    <img alt="" src="https://pomofocus.io/icons/plus-circle-white.png" />
                    <p>Add Task</p>
                </div>
            }
            <div ref={bottomRef} className="dummy-bottom"></div>
        </div>
    )
}

export default Tasklist;
import React, { useState, useRef } from 'react'
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Timer from './Components/Timer';
import Tasklist from './Components/Tasklist';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [ theme, setTheme ] = useState({color: "#db5c5c", themeNum: 0});
  const [ time, setTime ] = useState({pomodoro: 30, shortBreak: 5, longBreak: 15});
  const [ taskCount, setTaskCount ] = useState(0);

  const taskCountRef = useRef(taskCount)

  const handleTheme = (theme) => {
    setTheme({color: theme.color, themeNum: theme.theme})
  }

  const handleTimeSetting = (updatedTime) => {
    setTime(updatedTime);
  }

  const handleTaskCount = () => {
    taskCountRef.current = taskCount + 1
    setTaskCount(taskCountRef.current);
  }
  
  let timerTypes = [
    {type: "pomodoro", time: time.pomodoro, color: "#db5c5c"},
    {type: "short-break", time: time.shortBreak, color: "#3D5176"},
    {type: "long-break", time: time.longBreak, color: "#66558A"}
  ]

  return (
    <BrowserRouter>
      <div className="Main" style={{background: theme.color}}>
        <Navbar timerTypes={timerTypes} handleTimeSetting={handleTimeSetting}></Navbar>
        <Timer type={timerTypes} handleTheme={handleTheme} handleTaskCount={handleTaskCount}></Timer>
        <Tasklist taskCountRef={taskCountRef}></Tasklist>
      </div>
    </BrowserRouter>
  )
}

export default App
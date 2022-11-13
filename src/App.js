import React, { useState } from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Timer from './Components/Timer';
import Task from './Components/Task';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [ theme, setTheme ] = useState({color: "#e35454", themeNum: 0});
  const [ time, setTime ] = useState({pomodoro: 30, shortBreak: 5, longBreak: 15});

  const handleTheme = (theme) => {
    setTheme({color: theme.color, themeNum: theme.theme})
  }

  const handleTimeSetting = (updatedTime) => {
    setTime(updatedTime);
  }
  
  let timerTypes = [
    {type: "pomodoro", time: time.pomodoro, color: "#e35454"},
    {type: "short-break", time: time.shortBreak, color: "#3D5176"},
    {type: "long-break", time: time.longBreak, color: "#66558A"}
  ]

  return (
    <BrowserRouter>
      <div className="Main" style={{background: theme.color}}>
        <Navbar timerTypes={timerTypes} handleTimeSetting={handleTimeSetting}></Navbar>
        
        {/* Routing */}
        <Routes>
          <Route path="/login" element="Log in" />
        </Routes>
        
        <Timer type={timerTypes} handleTheme={handleTheme}></Timer>
        <Task></Task>

      </div>
    </BrowserRouter>
  )
}

export default App
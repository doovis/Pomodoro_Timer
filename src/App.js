import React, { useState } from 'react'
import "./App.css";
import Navbar from './Components/Navbar';
import Timer from './Components/Timer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [ theme, setTheme ] = useState({color: "#e35454", themeNum: 0});

  const handleTheme = (theme) => {
    setTheme({color: theme.color, themeNum: theme.theme})
  }
  
  let timerTypes = [
    {type: "pomodoro", time: 30, color: "#e35454", secondaryCol: "#ed6969"},
    {type: "short-break", time: 5, color: "#3D5176", secondaryCol: "#4c6594"},
    {type: "long-break", time: 15, color: "#66558A", secondaryCol: "#7d67ac"}
  ]

  return (
    <div className="Main" style={{background: theme.color}}>
      <Navbar theme={theme} timerTypes={timerTypes}></Navbar>
      <Timer type={timerTypes} handleTheme={handleTheme}></Timer>
    </div>
  )
}

export default App
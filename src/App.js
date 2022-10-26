import React from 'react'
import "./App.css";
import Navbar from './Components/Navbar';
import Timer from './Components/Timer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  let theme = "#e35454";

  let timerTypes = [
    {type: "pomodoro", time: 30, color: "#e35454"},
    {type: "short-break", time: 5, color: "#00A062"},
    {type: "long-break", time: 15, color: "#8A6FF3"}
  ]

  return (
    <div className="Main" style={{background: theme}}>
      <Navbar></Navbar>
      <Timer type={timerTypes} theme={theme}></Timer>
    </div>
  )
}

export default App
import React, { useState } from 'react';
import './Settings.css';

const Settings = ({setModal, timerTypes, handleTimeSetting}) => {
    const [ pomodoro, setPomodoro ] = useState(timerTypes[0].time); // pomodoro time
    const [ shortBreak, setShortBreak ] = useState(timerTypes[1].time); // Short break time
    const [ longBreak, setLongBreak ] = useState(timerTypes[2].time); // Long break time


    const handleTime = (e) => {
        switch (e.target.name) {
            case "pomodoro":
                if (e.target.value === "") {
                    setPomodoro("")
                    handleTimeSetting({pomodoro: 0, shortBreak: shortBreak, longBreak: longBreak})
                }
                if (e.target.value.match(/^[0-9]+$/) && Number(e.target.value) < 301) {
                    setPomodoro(Number(e.target.value))
                    handleTimeSetting({pomodoro: Number(e.target.value), shortBreak: shortBreak, longBreak: longBreak})
                }
                break;

            case "shortBreak":
                if (e.target.value === "") {
                    setShortBreak("")
                    handleTimeSetting({pomodoro: pomodoro, shortBreak: 0, longBreak: longBreak})
                }
                if (e.target.value.match(/^[0-9]+$/) && Number(e.target.value) < 301) {
                    setShortBreak(Number(e.target.value))
                    handleTimeSetting({pomodoro: pomodoro, shortBreak: Number(e.target.value), longBreak: longBreak})
                }
                break;
                
            case "longBreak":
                if (e.target.value === "") {
                    setLongBreak("")
                    handleTimeSetting({pomodoro: pomodoro, shortBreak: shortBreak, longBreak: 0})
                }
                if (e.target.value.match(/^[0-9]+$/) && Number(e.target.value) < 301) {
                    setLongBreak(Number(e.target.value))
                    handleTimeSetting({pomodoro: pomodoro, shortBreak: shortBreak, longBreak: Number(e.target.value)})
                }
                break;
        }
    }

  return (
        <>
            <div className='modal-bg' onClick={() => setModal("")}></div>
            <div className="modal-window">
                <div className='settings-header'>
                    <h4>Timer setting</h4>
                    <button className='close-btn' onClick={() => setModal("")}><img src="https://pomofocus.io/icons/remove-black-sm.png" /></button>
                </div>
                <hr />
                <div className="inputs">
                    <h5>Time (minutes)</h5>
                    <div className="timer-inputs">
                        <div>
                            <label>Pomodoro</label>
                            <input type="number" 
                                    name='pomodoro' min="0" 
                                    max="120" step="1" 
                                    value={pomodoro} onChange={(e) => {handleTime(e)}}
                            />
                        </div>
                        <div>
                            <label>Short Break</label>
                            <input type="number" 
                                    name='shortBreak' min="0" 
                                    max="120" step="1" 
                                    value={shortBreak} onChange={(e) => {handleTime(e)}}
                            />
                        </div>
                        <div>
                            <label>Long Break</label>
                            <input type="number" 
                                    name='longBreak' min="0" 
                                    max="120" step="1" 
                                    value={longBreak} onChange={(e) => {handleTime(e)}}
                            />
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Settings
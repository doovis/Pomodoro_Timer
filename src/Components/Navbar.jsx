import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ theme, timerTypes }) => {
    // Modal types
    // let modals = {
    //     settings: false,
    //     report: false
    // }

    const [ modalOpt, setModalOpt ] = useState(""); // active modal
    const [ pomodoro, setPomodoro ] = useState(""); // pomodoro time
    const [ shortBreak, setShortBreak ] = useState(""); // Short break time
    const [ longBreak, setLongBreak ] = useState(""); // Long break time
    // console.log(timerTypes);
    // console.log(theme);
    // console.log(modalOpt);

    return (
        <>
            {modalOpt && 
            <>
                <div className='modal-bg' onClick={() => setModalOpt("")}></div>
                <div className="modal-window">
                    <div className='settings-header'>
                        <h4>Timer setting</h4>
                        <button className='close-btn' onClick={() => setModalOpt("")}><img src="https://pomofocus.io/icons/remove-black-sm.png" /></button>
                    </div>
                    <hr />
                    <div className="inputs">
                        <h5>Time (minutes)</h5>
                        <div className="timer-inputs">
                            <div>
                                <label>Pomodoro</label>
                                <input type="number" step="1" value={pomodoro} />
                            </div>
                            <div>
                                <label>Short Break</label>
                                <input type="number" step="1" value={shortBreak} />
                            </div>
                            <div>
                                <label>Long Break</label>
                                <input type="number" step="1" value={longBreak} />
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </>
            }
            <div className="header">
                <div className='logo'>
                    <a href="/">
                        <img src="https://pomofocus.io/icons/icon-white.png" width='20' height='20'></img>
                        <h2>Pomofocus</h2>
                    </a>
                </div>
                <div className='options'>
                    <button onClick={() => setModalOpt("report")}>
                        <img src="https://pomofocus.io/icons/graph-white.png" />
                        <span>Report</span>
                    </button>
                    <button onClick={() => setModalOpt("settings")}>
                        <img src="https://pomofocus.io/icons/config-white.png" />
                        <span>Setting</span>
                    </button>
                    <button>
                        <img src="https://pomofocus.io/icons/user-white.png" />
                        <span>Login</span>
                    </button>
                </div>
            </div>
            <hr className="separator" />
        </>
    )
}

export default Navbar;
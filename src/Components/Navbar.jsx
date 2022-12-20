import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Settings from './Settings';
import Report from './Report';
import './Navbar.css';

const Navbar = ({ timerTypes, handleTimeSetting }) => {
    const [ modalOpt, setModalOpt ] = useState(""); // active modals

    return (
        <>
            {/* {modalOpt === "report" && <Report setModal={setModalOpt}/>} */}
            {modalOpt === "settings" && <Settings setModal={setModalOpt} timerTypes={timerTypes} handleTimeSetting={handleTimeSetting}/>}
            <div className="header">
                <div className='logo'>
                    <a href="/">
                        <img src="https://pomofocus.io/icons/icon-white.png" width='20' height='20'></img>
                        <h2>Pomofocus</h2>
                    </a>
                </div>
                <div className='options'>
                    {/* <button onClick={() => setModalOpt("report")}>
                        <img src="https://pomofocus.io/icons/graph-white.png" />
                        <span>Report</span>
                    </button> */}
                    <button onClick={() => {setModalOpt("settings")}}>
                        <img src="https://pomofocus.io/icons/config-white.png" />
                        <span>Settings</span>
                    </button>
                    <Link to="/login" onClick={() => {}} style={{textDecoration: "none"}}>
                        <button>
                            <img src="https://pomofocus.io/icons/user-white.png" />
                            <span>Login</span>
                        </button>
                    </Link>
                </div>
            </div>
            <hr className="separator" />
        </>
    )
}

export default Navbar;
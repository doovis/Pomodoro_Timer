import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Settings from './Settings';
import Report from './Report';
import './Navbar.css';

const Navbar = ({ timerTypes, handleTimeSetting }) => {
    const [ modalOpt, setModalOpt ] = useState(""); // active modals
    // Modal types
    // let modals = {
    //     settings: false,
    //     report: false
    // }


    return (
            <>
                {modalOpt === "settings" && <Settings setModal={setModalOpt} timerTypes={timerTypes} handleTimeSetting={handleTimeSetting}/>}
                {modalOpt === "report" && <Report setModal={setModalOpt}/>}
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
                        <button onClick={() => {setModalOpt("settings")}}>
                            <img src="https://pomofocus.io/icons/config-white.png" />
                            <span>Setting</span>
                        </button>
                        <div>
                        </div>
                        <button>
                            <img src="https://pomofocus.io/icons/user-white.png" />
                            <span>Login</span>
                        </button>
                        {/* <Routes>
                            <Route path="/log" element={<Settings />} />
                        </Routes> */}
                    </div>
                </div>
                <hr className="separator" />
            </>
    )
}

export default Navbar;
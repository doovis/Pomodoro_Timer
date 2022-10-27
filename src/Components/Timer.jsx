import React, { useEffect, useRef, useState } from 'react';
import './Timer.css';

const Timer = ({type, handleTheme}) => {
    let buttons = [
        {id: 1, title: "Pomodoro", class: "pomodoro"},
        {id: 2, title: "Short Break", class: "short-break"},
        {id: 3, title: "Long Break", class: "long-break"}
    ];

    let curMode = {
        break: "break",
        stop: "stop",
        inProgress: "inProgress"
    }

    const [ active, setActive ] = useState(1); // timer types: 1(Pomodoro) / 2(Short break) / 3(Long break)
    const [ mode, setMode ] = useState(curMode.break); // Modes: break/inProgress/stop
    const [ secondsLeft, setSecondsLeft ] = useState(type[0].time * 60); // Seconds left    
    
    // Latest state references
    const activeRef = useRef(active);
    const modeRef = useRef(mode);
    const secondsLeftRef = useRef(secondsLeft);
        
    //  Min/Sec field calculations
    let min = Math.floor(secondsLeft / 60);
    let sec = Math.floor(secondsLeft % 60);    
    
    // Mounting setInterval on first render
    useEffect(() => {
        const interID = setInterval(() => {
            if (modeRef.current === "stop") {
                return;
            }

            if (modeRef.current === "break") {
                return;
            }
            
            if (secondsLeftRef.current < 1) {
                modeRef.current = "stop";
                setMode("stop");
                return;
            }
            
            secondsLeftRef.current--;
            setSecondsLeft(secondsLeftRef.current);
        }, 1000);
        
        return () => {
            clearInterval(interID);
        }
    }, [])
    
    // switching timer types
    const timerTypes = (e) => {
        // Setting active class to selected timer type
        activeRef.current = e.target.dataset.id;
        setActive(e.target.dataset.id);

        // Changing theme color
        handleTheme({color: type[activeRef.current - 1].color, theme: activeRef.current - 1});

        // Stopping timer
        modeRef.current = 'stop';
        setMode('stop');

        // Changing timer duration
        secondsLeftRef.current = type[activeRef.current - 1].time * 60;
        setSecondsLeft(type[activeRef.current - 1].time * 60);
    }

    const buttonStop = <button className={`start-button ${type[activeRef.current - 1].type}`} onClick={() => { modeRef.current = "inProgress"; setMode("inProgress")}}>Start</button>;
    const buttonInProgress = <button className={`start-button ${type[activeRef.current - 1].type} stop`} onClick={() => { modeRef.current = "break"; setMode("break")}}>Stop</button>;

    return (
        <div className="timer-window">
            <div className="timer-types">
                {buttons.map((elem) => {
                    return (
                        <button 
                            key={elem.id}
                            data-id={elem.id} 
                            onClick={timerTypes}
                            className={Number(activeRef.current) === elem.id ? `btn-active` : ""} 
                        >
                            {elem.title}
                        </button>
                    );
                })}
           </div>
           <div className="timer">
            <p>{min < 10 ? "0" + min : min}</p>
            <p>:</p>
            <p>{sec < 10 ? "0" + sec : sec}</p>
           </div>
            {modeRef.current === "inProgress" ? buttonInProgress : buttonStop }
        </div>
    )
}

export default Timer;
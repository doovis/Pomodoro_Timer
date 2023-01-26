import React from 'react'

const Report = ({setModal}) => {
  return (
    <>
        <div className='modal-bg' onClick={() => setModal("")}></div>
        <div className="modal-window">
            <div className='settings-header'>
                <h4>report setting</h4>
                <button className='close-btn' onClick={() => setModal("")}><img alt='remove' src="https://pomofocus.io/icons/remove-black-sm.png" /></button>
            </div>
            <hr />
            <div className="inputs">
                <h5>Time</h5>
                {/* <div className="timer-inputs">
                    <div>
                        <label>Pomodoro</label>
                        <input type="number" step="1" value={pomodoro} onChange={(e) => {handlePTime(e)}} />
                    </div>
                    <div>
                        <label>Short Break</label>
                        <input type="number" step="1" value={shortBreak} onChange={(e) => {handleSTime(e)}} />
                    </div>
                    <div>
                        <label>Long Break</label>
                        <input type="number" step="1" value={longBreak} onChange={(e) => {handleLTime(e)}} />
                    </div>
                </div> */}
            </div>
            <hr />
        </div>
    </>
  )
}

export default Report
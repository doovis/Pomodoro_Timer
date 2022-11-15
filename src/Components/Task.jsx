import React, { useState } from 'react'
import './Task.css';

const Task = ({ item, setSelectTask, handleSelectTask, handleRemoveTask }) => {
  const [curTask, setCurTask] = useState(0);

  console.log('task re-run');

  return (
    <span 
        key={item.id}
        className={`task-item ${item.selected ? 'selected' : ''}`}
        onClick={() => {handleSelectTask(item); setSelectTask(true)}}
        >
        <img className='task-item-img' src="https://cdn-icons-png.flaticon.com/512/1008/1008958.png" />
        <p className='task-item-p1'>{item.taskname}</p>
        <p className='task-item-p2'>{curTask}/{item.taskcount}</p>
        <button className='task-item-button' onClick={handleRemoveTask(item)}>
            <img alt="options" src="https://pomofocus.io/icons/vertical-ellipsis.png" />
        </button>
    </span>
  )
}

export default Task
import React, { useState } from 'react'
import './Task.css';

const Task = ({ item, handleSelectTask }) => {
  const [curTask, setCurTask] = useState(0);

  return (
    <span 
        key={item.id}
        className={item.selected ? 'selected' : 'task-item'}
        onClick={() => handleSelectTask(item)}
        >
        <img className='task-item-img' src="https://cdn-icons-png.flaticon.com/512/1008/1008958.png" />
        <p className='task-item-p1'>{item.taskname}</p>
        <p className='task-item-p2'>{curTask}/{item.taskcount}</p>
        <button className='task-item-button'>
            <img alt="options" src="https://pomofocus.io/icons/vertical-ellipsis.png" />
        </button>
    </span>
  )
}

export default Task
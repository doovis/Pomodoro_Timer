import React, { useState, useEffect, useRef } from 'react'
import './Task.css';

const Task = ({ item, taskCountRef, handleSelectTask, handleRemoveTask }) => {
  const [curTask, setCurTask] = useState(0);

  useEffect(() => {  
    return () => {
      setCurTask(taskCountRef.current)
    }
  }, [taskCountRef.current])
  
  return (
    <div 
      key={item.id}
      className={`task-item ${item.selected ? 'selected' : ''}`}
      onClick={() => {handleSelectTask(item)}}
      >
      <img className='task-item-img' src="https://cdn-icons-png.flaticon.com/512/1008/1008958.png" />
      <p className='task-item-p1'>{item.taskname}</p>
      <p className='task-item-p2'>{curTask}/{item.taskcount}</p>
      <button className='task-item-button' onClick={(e) => handleRemoveTask(e, item)}>
          <img alt="options" src="https://pomofocus.io/icons/vertical-ellipsis.png" />
      </button>
  </div>
  )
}

export default Task
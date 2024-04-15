import React from 'react'

const Task = ({ date, title, description, deleteTask, index }) => {

  return (
    <div className='task'>
      <div>
        <p>{date}</p>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <button type="submit" onClick={() => deleteTask(index)}>-</button>
    </div>
  )
}

export default Task
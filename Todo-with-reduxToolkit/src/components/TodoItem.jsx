import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, updateTask,toggleTask } from '../redux/tasksSlice'

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(title)
  const removeTask = () => {
    dispatch(deleteTask({ id: id }))
  }
  const handleUpdate = () => {
    if (editedText.trim() !== '') {
      dispatch(updateTask({ id: id, newText: editedText }))
      setIsEditing(false);
    }
  }

  const handleToggleComplete = () =>{
    dispatch(toggleTask({id}))
  }

  return (
    <li className='task-name'>
      <input type="checkbox" checked={completed} onChange={()=>dispatch(toggleTask({id}))}></input>
      {isEditing ? (
        <div className='task-title'>
          <input type='text' value={editedText} onChange={(e) => setEditedText(e.target.value)}></input>
          {/* <button onClick={handleUpdate}> Save </button> */}
        </div>
      ) : (
        <div className='task-title'>
          <span
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
            onClick={()=>handleToggleComplete}>
            {title}
          </span>
          {/* <button onClick={()=>setIsEditing(true)}>Edit</button> */}
        </div>
      )
      }

      <div>
        <button className='remove-task-button' onClick={() => { removeTask() }}>
          Delete
        </button>

        {isEditing ? (
          <button onClick={handleUpdate}> Save </button>
        ): (
        <button className='edit-task-button' onClick={() => { setIsEditing(true) }}>Edit</button>
        )}
      </div>
    </li >
  )
}

export default TodoItem
import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
const TodoList = () => {
  const todos = useSelector((state)=>{
    return state.tasks
  })
  return (
    <div>
      <ul className='tasks-list'>
        {todos.map((todo)=>{
          return(
            <TodoItem key={todo.id}
            id={todo.id} title={todo.name} completed={todo.status}/>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList
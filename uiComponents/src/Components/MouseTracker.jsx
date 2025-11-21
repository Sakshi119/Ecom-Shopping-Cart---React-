import React,{useState} from 'react'
import App from '../App'
import handleMouse from '../App'
const MouseTracker = ({x,y}) => {
  return (
    <div className='mouse-move-container'>
      <p>mouse tracker</p>
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </div>
  )
}

export default MouseTracker
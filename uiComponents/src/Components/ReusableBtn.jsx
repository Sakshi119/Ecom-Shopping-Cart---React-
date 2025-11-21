import React from 'react'

const ReusableBtn = ({text,color,borderColor}) => {
  return (
    <p style={{marginBottom:"20px",marginRight:"10px",display:'inline-flex'}}>
        <button style={{backgroundColor:color,borderColor:borderColor,border:'3px solid',color:borderColor}}>{text}</button>
    </p>
  )
}

export default ReusableBtn
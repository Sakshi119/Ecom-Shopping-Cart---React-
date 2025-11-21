import React, { useRef, useState } from 'react'

const UserList = () => {
    const [names, setNames] = useState(['Shlesha','Sakshi','Shreya','Piyu']);
    const inputRef = useRef();
    const handleChange = () => {
        console.log(inputRef.current.value);
    }
  return (
    // <ul>
    //     {names.map((name) => (
    //         <li>{name}</li>
    //     ))}
    // </ul>
    <input type="text" placeholder='Enter Name' ref={inputRef} onChange={handleChange} />
  )
}

export default UserList
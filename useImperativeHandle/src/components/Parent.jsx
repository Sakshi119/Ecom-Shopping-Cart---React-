import React, { useRef } from 'react'
import Child from './Child';

const Parent = () => {

    const ref = useRef();

   const handleChange = () =>{
    ref.current.sayHi();
   }
  return (
    <div>

        <Child ref={ref}/>
        <h2>Parent</h2>
        <button onClick={handleChange}>Click</button>
    </div>
  )
}

export default Parent
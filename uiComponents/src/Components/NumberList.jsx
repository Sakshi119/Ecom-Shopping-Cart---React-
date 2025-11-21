import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const NumberList = () => {

 const [numberList,setNumberList] = useState([])

 const showNumbers = () =>{
    let fileList = []
    for(let i=1;i<=10;i++){
     fileList.push(i)
    }
    setNumberList(fileList)
 }

 useEffect(()=>{
    showNumbers()
 },[])

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <h2>NumberList : </h2>

        {numberList.map((index)=>(
            <p key={index} style={{fontWeight: index % 2 != 0 ? "normal":"bold", color: index % 2 !=0 ? "white":"brown"}}>{index}</p>
        ))}
        
    </div>
  )
}

export default NumberList
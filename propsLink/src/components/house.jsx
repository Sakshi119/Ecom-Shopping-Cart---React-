import React,{useState} from 'react'

const house = ({lightOn,lightOnImg,lightOffImg}) => {   
  return (
    <>
        <div className='room'>
            <h2> this is my house </h2>            
            <img 
                src={lightOn ? lightOnImg : lightOffImg}
                alt='light' style={{width:'100px',height:'100px'}}></img>

            <p>{lightOn? 'Light is on' : 'Light is off'}</p>    
        </div>
     
    </>
  )
}

export default house
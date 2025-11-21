import React from 'react'

const Remote = ({id,lightOn,toogleLight,lightOnImg,lightOffImg}) => {
  return (
    <div>
        <h2> Remote {id}</h2>

        <img src={lightOn ? lightOnImg : lightOffImg} alt='light' style={{width:'100px',height:'100px'}}></img>
        
        <p>Light is {lightOn ? 'ON' : 'OFF'}</p>         
        
        <button onClick={toogleLight}>
            {lightOn ? 'Turn Light OFF' : 'Turn Light ON'}
        </button>
    </div>
  )
}

export default Remote
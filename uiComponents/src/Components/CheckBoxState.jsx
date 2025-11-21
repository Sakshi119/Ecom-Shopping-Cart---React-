import React,{useState} from 'react'

const CheckBoxState = () => {

    const [isCitizen,setIsCitizen] = useState(false)
    const [isOver21,setIsOver21] = useState(false)
    return (
        <div style={{display:"flex",alignItems: "center",justifyContent:"space-around"}} id="checkBoxState" >
            <h3>Are you a Citizen: {isCitizen ? 'yes' : 'no'}</h3>
            <h3>Are you over 21: {isOver21 ? 'yes' : 'no'}</h3>

            <p>Are you a citizen? <input type='checkbox' onClick={() => setIsCitizen(!isCitizen)}></input></p>
            <p>Are you over 21? <input type='checkbox' onClick={()=>setIsOver21(!isOver21)}></input></p>

        </div>

    )
}

export default CheckBoxState
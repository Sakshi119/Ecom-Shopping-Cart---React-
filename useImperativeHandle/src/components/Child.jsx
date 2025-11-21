import React,{forwardRef, useImperativeHandle} from 'react'

const Child = (props, ref) => {
    useImperativeHandle(ref, ()=>{
        return{
            sayHi
        }
    })
    const sayHi = () => {
        console.log("hey there");
    }
    return (
        <div>Child</div>
    )
}

export default forwardRef(Child);
import React,{useState} from 'react'

const StateUpdateUsingString = () => {
    const [items,setItems] = useState([1,2,3,4,5,6])
    // const list = [1, 2, 3, 4, 5]
    const doubleNumber = (index) =>{
        // items[index] = items[index] * 2
        // console.log(items)
        // setItems([...items])

        setItems(prev=>
            prev.map((item,i)=>(i === index?item*2:item))
        )
    }
    return (
        <>
            <h2>state update Using string</h2>
            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={index}>
                            <p>{item} <button onClick={() => doubleNumber(index)}>Double</button> </p>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}

export default StateUpdateUsingString
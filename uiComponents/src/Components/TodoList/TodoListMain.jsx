import React, { useState } from 'react'

const TodoListMain = () => {
    const [text, setText] = useState('')
    const [submitedValue, setSubmitedValue] = useState([])

    const deleteItem = (indexToDelete) => {
        console.log('im clicked', indexToDelete);
        setSubmitedValue(prevItems =>
            prevItems.filter((_, index) => index !== indexToDelete)
        );
    };

    // text-decoration: line-through;
    const todoSubmited = () => {
        if (!text.trim()) return;
        setSubmitedValue(prev => [...prev, { text, checked: false }]);
        setText('');
    };

    const checkboxToggle = (index) => {
        setSubmitedValue(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, checked: !item.checked } : item
            )
        );
    };

    return (
        <div className='todo-main'>
            <h2>Todo</h2>
            <div className='text-input-sec'>
                <label htmlFor="input_text">What is your todo for today?</label>
                <input id="input_text" type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
                <button onClick={todoSubmited}>Submit</button>
            </div>

            <h2>List</h2>
            <ul className='checkbox-input-list'>
                {
                    submitedValue.length === 0 ?
                        (<p>Add a todo</p>)
                        :
                        (submitedValue.map((item, index) => (
                            <li key={index} style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <input type='checkbox'
                                        checked={item.checked}
                                        onChange={() => checkboxToggle(index)} />
                                    {item.text}
                                </div>
                                <button className='delete-btn' onClick={() => deleteItem(index)}>🗑️</button>
                            </li>
                        )))
                }
            </ul>

        </div>
    )
}

export default TodoListMain
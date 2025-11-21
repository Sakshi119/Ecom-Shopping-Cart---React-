
import './App.css'
import Home from './components/home'
import { useState } from 'react';

function App() {

  const [data,setData] = useState("hello Kiran");
  
  return (
    <>
      <Home data={data} setData={setData}></Home>
      <input type='text' onChange={e => setData(e.target.value)}/>
    </>
  )
}

export default App

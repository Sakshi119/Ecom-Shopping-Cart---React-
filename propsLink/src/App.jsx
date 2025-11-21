import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import House from './components/house'
import Remote from './components/Remote'
import lightOnImg from './assets/lightOnImg.png'
import lightOffImg from './assets/lightOffImg.png'
function App() {
  const [lightOn, setLightOn] = useState(false)

  function toogleLight (){
    setLightOn(prev => !prev)
  }
  return (
    <Router>
      <nav>
        <Link to="/">House</Link> | {" "}
        <Link to="/remote1">Remote 1</Link> | {" "}
        <Link to="/remote2">Remote 2</Link> | {" "}
        <Link to="/remote3">Remote 3</Link> | {" "}
        <Link to="/remote4">Remote 4</Link> | {" "}
        <Link to="/remote5">Remote 5</Link> | {" "}
      </nav>
      <Routes>
        <Route path="/" element={<House lightOn={lightOn} lightOnImg={lightOnImg} lightOffImg={lightOffImg}/>}></Route>
        <Route path="/remote1" element={<Remote id={1} toogleLight={toogleLight} lightOn={lightOn} lightOnImg={lightOnImg} lightOffImg={lightOffImg}/>}></Route>
        <Route path="/remote2" element={<Remote id={2} toogleLight={toogleLight} lightOn={lightOn} lightOnImg={lightOnImg} lightOffImg={lightOffImg}/>}></Route>
        <Route path="/remote3" element={<Remote id={3} toogleLight={toogleLight} lightOn={lightOn} lightOnImg={lightOnImg} lightOffImg={lightOffImg}/>}></Route>
        <Route path="/remote4" element={<Remote id={4} toogleLight={toogleLight} lightOn={lightOn} lightOnImg={lightOnImg} lightOffImg={lightOffImg}/>}></Route>
        <Route path="/remote5" element={<Remote id={5} toogleLight={toogleLight} lightOn={lightOn} lightOnImg={lightOnImg} lightOffImg={lightOffImg}/>}></Route> 
      </Routes>
        
    </Router> 
  )
}

export default App

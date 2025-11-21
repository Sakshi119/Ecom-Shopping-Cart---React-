
import { useState } from 'react'
import './App.css'
// import Accordion from './Components/Accordion'
import CheckBoxState from './Components/CheckBoxState'
import DestructuringEg from './Components/DestructuringExamples/DestructuringEg'
import LikeButton from './Components/likeButton'
import LoginLogoutBtn from './Components/LoginLogoutBtn'
import MouseTracker from './Components/MouseTracker'
import NavigationList from './Components/NavigationList'
import NumberList from './Components/NumberList'
import RandomColor from './Components/randomColor'
import ReadMore from './Components/ReadMore'
import ReusableBtn from './Components/ReusableBtn'
import StateUpdateUsingString from './Components/StateUpdateUsingString'
import TodoListMain from './Components/TodoList/TodoListMain'
import UserCard from './Components/UserCard'

function App() {

  const cardData = [
    { name: "Sakshi", age: "70", email: "Sakshi@gmail.com" },
    { name: "Shreya", age: "30", email: "Shreya@gmail.com" },
    { name: "Ivy", age: "40", email: "Ivy@gmail.com" },
    { name: "Prajakta", age: "50", email: "Prajakta@gmail.com" },
    { name: "Priyesh", age: "60", email: "Priyesh@gmail.com" },
    { name: "Shlesha", age: "70", email: "Shlesha@gmail.com" },
    { name: "Kiran", age: "70", email: "Kiran@gmail.com" },
  ]

  const menuItems = [
    { name: "Like Button", url: "#likeButton" },
    { name: "Login Logout Button", url: "#loginLogoutBtn" },
    { name: "Check Box State", url: "#checkBoxState" },
    { name: "Random Color", url: "#randomColor" },
    { name: "Read More", url: "#readMore" },
    { name: "Reusable Button", url: "#reusableButton" },
    { name: "User Card", url: "#userCard" },
  ]

  const [mousePosition,setMousePosition] = useState({x:0,y:0});
  const handleMouse=(e) =>{
    setMousePosition({x:e.clientX,y:e.clientY})
  }
  return (
    <>
      <div onMouseMove={handleMouse} >
        {/* <Accordion /> */}
        <LikeButton />
        <LoginLogoutBtn />
        <CheckBoxState />
        <RandomColor />
        <ReadMore />

        {/* Reusable Button */}
        <div style={{ marginBottom: "20px", marginRight: "10px" }} id='reusableButton'>
          <ReusableBtn text='Hello' color='pink' borderColor='brown' />
          <ReusableBtn text="Bye" color='purple' borderColor='floralwhite' />
          <ReusableBtn text="How are you" color='lightblue' borderColor='tomato' />
          <ReusableBtn text="High Five" color='bisque' borderColor='teal' />
          <ReusableBtn text="I purple you" color='wheat' borderColor='steelblue' />
          <ReusableBtn text="I like this Button" color='thistle' borderColor='white' />
          <ReusableBtn text="Hey yaa" color='sandybrown' borderColor='sienna' />
        </div>

        {/* Card Component */}
        <div id="userCard">
          {cardData.map((cardData, index) => (
            <UserCard key={index} name={cardData.name} age={cardData.age} email={cardData.email} index={index} />
          ))}
        </div>


        {/* Navigation menu   */}
        <div className='main-menu'>
          <h2 style={{ color: 'pink' }}>Navigation Menu</h2>
          {menuItems.map((menuItems, index) => (
            <NavigationList key={index} name={menuItems.name} url={menuItems.url} />
          ))}
        </div>


        <NumberList />


        <TodoListMain />



        {/* practice working with array indices, previous state, and conditional updates in React */}

        <StateUpdateUsingString />


        <MouseTracker x={mousePosition.x} y={mousePosition.y}/>


        <DestructuringEg />
      </div>

    </>
  )
}

export default App

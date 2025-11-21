import React,{useState} from 'react'

const LoginLogoutBtn = () => {
    const [isLogIn,setIsLogIn] = useState(false)
  return (
    <div style={{backgroundColor:"Purple",padding: "20px"}} id="loginLogoutBtn">
        <h2>{isLogIn ? "Click to Logout": "Click to Login"}</h2>

        <button onClick={() => setIsLogIn(!isLogIn)}> {isLogIn ? "Logout" : "Login"} </button>
        <h1>{isLogIn ? "Welcome" : "Login"}</h1>
    </div>
  )
}

export default LoginLogoutBtn
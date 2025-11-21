
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
     <h2>Context API</h2>
    </UserContextProvider>
  )
}

export default App

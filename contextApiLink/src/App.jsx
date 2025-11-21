

import './App.css'
import Home from './Components/Home'
import { ContextProvider } from './Context/Context'


function App() {

  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  )
}

export default App

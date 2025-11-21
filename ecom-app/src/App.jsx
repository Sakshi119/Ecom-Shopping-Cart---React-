import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import CartPage from './pages/CartPage'
import { NavLink, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <NavLink />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </>
  )
}

export default App

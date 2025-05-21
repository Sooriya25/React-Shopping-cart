import './App.css'
import Cart from './components/cart'
import ProductList from './components/ProductList'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SingleProduct from './components/SingleProduct'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <Router>  
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductList/>} />
         <Route path='/product/:id' element={<SingleProduct/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Router>
  )
}

export default App

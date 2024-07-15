import React from 'react'
import Home from './screens/Home'
import Login from './screens/Login'
import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';


function App() {
  return (
  <>
  <CartProvider>
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/signup" element={<Signup></Signup>}></Route>
        <Route exact path="/myOrder" element={<MyOrder></MyOrder>}></Route>
      </Routes>
    </div>
  </Router>
  </CartProvider>
  </>
  )
}

export default App
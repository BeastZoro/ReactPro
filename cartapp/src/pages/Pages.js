import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/cart' element={<Cart />}/>
      </Routes>
    </div>
  )
}

export default Pages
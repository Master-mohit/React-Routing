import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import Product from './pages/Product'
import About from './pages/About'
import Ramdom from './pages/Ramdom'

const App = () => {
  return (
    <div>
      <Navbar />
       <h4>Mohit Nougrahiya</h4>
      <Routes >
        <Route path='/' element = {<Home />} />  
        <Route path='/work' element = {<Work />} />
        <Route path='/about' element = {<About />} />
        <Route path='/product' element = {<Product />} />
        <Route path='*' element = {<Ramdom />} />
      </Routes>
    </div>
  )
}

export default App

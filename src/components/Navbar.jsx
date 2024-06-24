import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div id='nav'>
      <h3>SIRT</h3>
      <input type="text" placeholder='Search...' />
      <div>
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/work" >Work</Link>
      <Link to="/product" >Product</Link> 
     
      </div>
    </div>
  )
}

export default Navbar

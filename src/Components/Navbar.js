import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const items =useSelector((state)=>state.cart)
  return (
  <>
  <nav class="navbar navbar-expand-lg navbar-light bg-danger h-25">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <NavLink to="/cart"><button>add to cart</button></NavLink>
    <NavLink to="/todolist"><button className="btn btn-success">TODO</button></NavLink>
    <span className="cartCount">cart items:{items.length}</span>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    </div>
  </div>
</nav>
  
  </>
  )
}

export default Navbar
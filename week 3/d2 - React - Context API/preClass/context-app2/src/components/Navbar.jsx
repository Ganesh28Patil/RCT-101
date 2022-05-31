import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

const Navbar = () => {
   const {cartCount} = useContext(CartContext)
  return (
    <>
        <h1>Cart Count is {cartCount}</h1>
    </>
  )
}

export default Navbar
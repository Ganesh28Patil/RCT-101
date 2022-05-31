import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
  const {cartCount}  = useContext(CartContext);
  return (
          <>
            {/* <div>Navbar</div>           */}
            <h3>No. of Item {cartCount}</h3>
          </>
    )
}

export default Navbar
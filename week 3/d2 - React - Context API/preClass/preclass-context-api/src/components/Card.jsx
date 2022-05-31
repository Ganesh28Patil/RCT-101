import React, { useContext } from 'react'

import { CartContext } from "../contexts/CartContext";

const Card = () => {
  const {handleCartCount}  = useContext(CartContext);
  return (
    <>
        {/* <div>Card</div> */}
        <button 
        onClick={()=>{handleCartCount(1)}}
        >Buy Now</button>
    </>
  )
}

export default Card
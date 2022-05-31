import React,{createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [count,setCount] = useState(0);
    return <CartContext.Provider value = {100}>{children}</CartContext.Provider>
}
import { createContext, useState } from "react";

export const CartContext = createContext();

// JSX

export const CartContextProvider = ({children}) =>{
    const [cartCount, setCartCount] = useState(0);
     
    const handleCartCount = (v) =>{
        setCartCount(cartCount + v);
    }
    return <CartContext.Provider value={{cartCount,handleCartCount}}>
            {children}
    </CartContext.Provider>
}
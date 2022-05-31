import  { createContext } from 'react'

export const CartContext = createContext();

export const CartContextProvider = ({children})=>{
    const [cartCount, setCartCount] = useState(0)
        
        return <>
                 <CartContext.Provider value={cartCount}> {children} </CartContext.Provider>
               </>
}
import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])    

    //.....Functions
    const addItem = (product) => {
        if (isInCart(product.id)) {
            let item = cart.find((item) => item.id === product.id)
            let quantity = item.quantity + product.quantity
            if (quantity > item.stock) {
                quantity = item.stock
            }
            item.quantity = quantity
            setCart(cart)
        }
        else {
            setCart([...cart, product])
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((product)=> product.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((product)=> product.id === id)
    }

    //.....Return
    return (
        <CartContext.Provider value={{cart, addItem, clear, removeItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

//.....Hook
export const useCart = () => useContext(CartContext)
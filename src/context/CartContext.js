import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])    

    //.....Functions
    const addItem = (product, quantity) => {
        const itemInCart = cart.find((item) => item.id === product.id)
        if (itemInCart) {
            let finalQuantity = itemInCart.quantity + quantity
            if (finalQuantity > itemInCart.stock) {
                finalQuantity = itemInCart.stock
            }
            itemInCart.quantity = finalQuantity
            setCart([...cart])
        }
        else {
            product.quantity = quantity
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

    const itemCount = () => {
        let count = 0
        cart.forEach(product => {
            count = count + product.quantity
        });
        return count
    }

    const updateQuantity = (id, number) => {
        const itemInCart = cart.find((item) => item.id === id)
        let finalQuantity = itemInCart.quantity + number
        if (finalQuantity < 1 || finalQuantity > itemInCart.stock) {
            return
        }
        itemInCart.quantity = finalQuantity
        setCart([...cart])
    }

    const totalPrice = () => {
        let count = 0
        cart.forEach(product => {
            count = count + (product.price * product.quantity)
        })
        return count
    }

    //.....Return
    return (
        <CartContext.Provider value={{cart, addItem, clear, removeItem, isInCart, itemCount, updateQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

//.....Hook
export const useCart = () => useContext(CartContext)
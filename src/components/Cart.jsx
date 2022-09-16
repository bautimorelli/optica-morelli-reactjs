import React from "react";
import { useCart } from "../context/CartContext";


const Cart = () => {
	const {cart} = useCart()
	console.log(cart)

	return (
	<div>Aqui va mi carrito</div>
	)
};

export default Cart;

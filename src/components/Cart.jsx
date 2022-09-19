import { Typography } from "@mui/material";
import React from "react";
import { useMemo } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
	const { cart, totalPrice } = useCart();

	const totalFormatted = useMemo(() => {
		console.log(cart);
		return Intl.NumberFormat(navigator.language).format(totalPrice());
	}, [cart, totalPrice]);

	return (
		<>
			<Typography
				variant="h2"
				align="center"
				m="30px">
				Tu carrito
			</Typography>
			{cart.length === 0 ? (
				<Typography variant="body1">Tu carrito esta vacio</Typography>
			) : (
				<>
					{cart.map((product) => (
						<CartItem
							key={product.id}
							product={product}
						/>
					))}
					<Typography>Total: ${totalFormatted}</Typography>
				</>
			)}
		</>
	);
};

export default Cart;

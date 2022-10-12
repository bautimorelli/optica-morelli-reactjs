import { Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import EmptyCartButton from "./EmptyCartButton";
import FinishedCartButton from "./FinishedCartButton";
import Toast from "./Toast";
import EmptyCart from "./EmptyCart";

const Cart = () => {
	const { cart, totalPrice } = useCart();
	const [toast, setToast] = useState(false);

	return (
		<>
			<Toast
				text={"Eliminado del carrito correctamente"}
				time={2000}
				type={"success"}
				open={toast}
				setOpen={setToast}
			/>
			<Typography
				variant="h2"
				align="center"
				m="30px">
				Tu carrito
			</Typography>
			{cart.length === 0 ? (
				<EmptyCart/>
			) : (
				<>
					{cart.map((product) => (
						<CartItem
							key={product.id}
							product={product}
							setToast={setToast}
						/>
					))}
					<Typography
						variant="h5"
						sx={{
							display: "flex",
							my: 3,
							mx: "7%",
							justifyContent: "flex-end",
						}}>
						Total: $
						{Intl.NumberFormat(navigator.language).format(
							totalPrice()
						)}
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexFlow: "row nowrap",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<EmptyCartButton/>
						<FinishedCartButton />
					</Box>
				</>
			)}
		</>
	);
};

export default Cart;

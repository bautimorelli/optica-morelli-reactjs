import { Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import EmptyCartButton from "./EmptyCartButton";
import FinishedCartButton from "./FinishedCartButton";
import { useNavigate } from "react-router-dom";
import Toast from "./Toast";

const Cart = () => {
	const { cart, totalPrice } = useCart();
	const [toast, setToast] = useState(false);
	const navigate = useNavigate();

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
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						height: "50vh",
					}}>
					<Typography
						variant="h3"
						marginY={3}
						textAlign="center">
						Tu carrito esta vacio!
					</Typography>
					<Button
						variant="contained"
						onClick={() => navigate("/")}>
						Ir a la tienda
					</Button>
				</Box>
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

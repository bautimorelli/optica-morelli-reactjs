import { Typography, Box } from "@mui/material"
import React, { useState } from "react"
import { useCart } from "../context/CartContext"
import CartItem from "./CartItem"
import EmptyCartButton from "./EmptyCartButton"
import FinishedCartButton from "./FinishedCartButton"
import Toast from "./Toast"
import EmptyCart from "./EmptyCart"

const Cart = () => {
	const { cart, totalPrice } = useCart()
	const [toast, setToast] = useState(false)

	const showToast = (visible) => {
		setToast(visible)
	}

	let mainContent
	if (cart.length === 0) {
		mainContent = <EmptyCart />
	} else {
		mainContent = (
			<>
				<Toast
					text={"Eliminado del carrito correctamente"}
					time={2000}
					type={"success"}
					open={toast}
					setOpen={showToast}
				/>
				{cart.map((product) => (
					<CartItem
						key={product.id}
						product={product}
						setToast={showToast}
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
					{Intl.NumberFormat(navigator.language).format(totalPrice())}
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexFlow: "row nowrap",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<EmptyCartButton />
					<FinishedCartButton />
				</Box>
			</>
		)
	}

	return (
		<>
			<Typography
				variant="h2"
				align="center"
				m="30px">
				Tu carrito
			</Typography>
			{mainContent}
		</>
	)
}

export default Cart

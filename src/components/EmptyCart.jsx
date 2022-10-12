import React from "react"
import { Typography, Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const EmptyCart = () => {
	const navigate = useNavigate()

	return (
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
	)
}

export default EmptyCart

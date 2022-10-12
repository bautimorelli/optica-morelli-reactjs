import { Box, Divider, Typography } from "@mui/material"
import React from "react"

const Ticket = ({ id, cart, total }) => {
	const formatPrice = (price) =>
		Intl.NumberFormat(navigator.language).format(price)

	return (
		<Box
			sx={{
				display: "flex",
				height: "calc(100vh - 70px)",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					padding: 3,
					boxShadow: 4,
					borderRadius: 3,
				}}>
				<Typography
					variant="h5"
					sx={{ alignSelf: "center", marginBottom: 1 }}>
					Ticket
				</Typography>
				<Divider variant="middle" />
				<Typography sx={{ marginTop: 2 }}>Compra Nro: {id}</Typography>
				<Typography sx={{ marginTop: 2 }}>Productos:</Typography>
				{cart.map((product) => (
					<Box
						key={product.id}
						sx={{ display: "flex", flexDirection: "row" }}>
						<Typography>
							{product.quantity} - {product.name} - $
							{formatPrice(product.price * product.quantity)}
						</Typography>
					</Box>
				))}
				<Typography sx={{ marginY: 2 }}>
					Total: ${formatPrice(total)}
				</Typography>
				<Divider variant="middle" />
				<Typography
					variant="h5"
					sx={{ alignSelf: "center", marginTop: 2 }}>
					Gracias por su compra
				</Typography>
			</Box>
		</Box>
	)
}

export default Ticket

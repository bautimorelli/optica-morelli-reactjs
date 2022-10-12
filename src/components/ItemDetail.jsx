import React, { useState } from "react"
import { Box } from "@mui/material"
import Typography from "@mui/material/Typography"
import ItemCount from "./ItemCount"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import BackdropImage from "./BackdropImage"
import { useTheme } from "@mui/material/styles"
import Toast from "./Toast"

const ItemDetail = ({ item }) => {
	const { id, name, brand, price, stock, pictureURL } = item
	const [count, setCount] = useState(1)
	const [compra, setCompra] = useState(false)
	const [overflow, setOverflow] = useState(false)
	const [open, setOpen] = useState(false)

	const navigate = useNavigate()
	const { addItem, stockOverflow } = useCart()
	const theme = useTheme()

	const onAdd = () => {
		if (!stockOverflow(id, count)) {
			let product = {
				id,
				name,
				price,
				stock,
				pictureURL,
				quantity: 0,
			}
			addItem(product, count)
		} else {
			setOverflow(true)
		}
		setCompra(true)
		setOpen(true)
	}

	const showToast = (visible) => {
		setOpen(visible)
	}

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				justifyContent: "center",
				my: 6,
			}}>
			<BackdropImage
				name={name}
				pictureURL={pictureURL}
			/>
			<Box
				sx={{
					display: "inline-flex",
					flexDirection: "column",
					flexWrap: "wrap",
					justifyContent: "center",
					ml: 1,
					[theme.breakpoints.down("sm")]: {
						width: 350,
					},
					[theme.breakpoints.up("sm")]: {
						width: 450,
					},
				}}>
				<Typography
					variant="h4"
					component="div"
					sx={{ mb: 1 }}>
					{name}
				</Typography>
				<Typography
					variant="body"
					component="div"
					sx={{ mb: 2 }}>
					{brand}
				</Typography>
				<Typography
					variant="body"
					color="text.secondary"
					sx={{ mb: 2 }}>
					$ {price}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{ mb: 2 }}>
					Stock Disponible: {stock}
				</Typography>
				{stock === 0 ? (
					<Box>
						<Typography marginBottom={2}>
							Lo sentimos! Este producto no cuenta con sock por el
							momento
						</Typography>
						<Button
							variant="contained"
							onClick={() => navigate("/")}>
							Seguir Comprando
						</Button>
					</Box>
				) : (
					<>
						{!compra ? (
							<ItemCount
								stock={stock}
								onAdd={onAdd}
								count={count}
								setCount={(value) => {
									setCount(value)
								}}
							/>
						) : (
							<>
								<ButtonGroup>
									<Button
										variant="contained"
										onClick={() => navigate("/cart")}>
										Ir al carrito
									</Button>
									<Button onClick={() => navigate("/")}>
										Seguir Comprando
									</Button>
								</ButtonGroup>
								{!overflow ? (
									<Toast
										text={
											"Agregado al carrito correctamente"
										}
										time={2000}
										type={"success"}
										open={open}
										setOpen={showToast}
									/>
								) : (
									<Toast
										text={
											"La cantidad agregada supera nuestro stock"
										}
										time={2000}
										type={"warning"}
										open={open}
										setOpen={showToast}
									/>
								)}
							</>
						)}
					</>
				)}
			</Box>
		</Box>
	)
}

export default ItemDetail

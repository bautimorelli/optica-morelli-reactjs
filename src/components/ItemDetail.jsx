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
	const [boughtItem, setBoughtItem] = useState(false)
	const [overflow, setOverflow] = useState(false)
	const [open, setOpen] = useState(false)

	const navigate = useNavigate()
	const { addItem, stockOverflow } = useCart()
	const theme = useTheme()

	const formatPrice = (price) =>
		Intl.NumberFormat(navigator.language).format(price)

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
			setBoughtItem(true)
		} else {
			setOverflow(true)
		}
		setOpen(true)
	}

	const showToast = (visible) => {
		setOpen(visible)
	}

	let buyContent
	if (boughtItem) {
		// Item ya comprado
		buyContent = (
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
			</>
		)
	} else if (stock === 0) {
		// Item sin stock
		buyContent = (
			<Box>
				<Typography marginBottom={2}>
					Lo sentimos! Este producto no cuenta con sock por el momento
				</Typography>
				<Button
					variant="contained"
					onClick={() => navigate("/")}>
					Seguir Comprando
				</Button>
			</Box>
		)
	} else {
		// Selector de Cantidad
		buyContent = (
			<ItemCount
				stock={stock}
				onAdd={onAdd}
				count={count}
				setCount={(value) => {
					setCount(value)
				}}
			/>
		)
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
			<Toast
				text={
					overflow
						? "La cantidad agregada supera nuestro stock"
						: "Agregado al carrito correctamente"
				}
				time={2000}
				type={overflow ? "warning" : "success"}
				open={open}
				setOpen={showToast}
			/>
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
					${formatPrice(price)}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{ mb: 2 }}>
					Stock Disponible: {stock}
				</Typography>
				{buyContent}
			</Box>
		</Box>
	)
}

export default ItemDetail

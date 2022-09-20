import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import ItemCount from "./ItemCount";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ item }) => {
	const [count, setCount] = useState(1);
	const [compra, setCompra] = useState(false);
	const navigate = useNavigate()
	const {addItem} = useCart()
	const {id, name, brand, price, stock, pictureURL, pictureAlt} = item
	
	const onAdd = () => {
		let product = {
            id,
			name,
            price,
            stock,
            pictureURL,
			pictureAlt,
            quantity: 0,
        }
		setCompra(true)
		addItem(product, count)
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				justifyContent: "center",
				my: 6,
			}}>
			<Box>
				<Box
					component="img"
					src={pictureURL}
					alt={name}
					sx={{
						objectFit: "contain",
						maxHeight: 300,
						maxWidth: 450,
						mr: 5,
					}}
				/>
			</Box>
			<Box
				sx={{
					display: "inline-flex",
					flexDirection: "column",
					flexWrap: "wrap",
					ml: 5,
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
				{!compra ? (
					<ItemCount
						stock={stock}
						onAdd={onAdd}
						count={count}
						setCount={setCount}
					/>
				) : (
					<ButtonGroup>
						<Button onClick={() => navigate('/cart')}>Ir al carrito</Button>
						<Button onClick={() => navigate('/')}>Seguir Comprando</Button>
					</ButtonGroup>
				)}
			</Box>
		</Box>
	);
};

export default ItemDetail;

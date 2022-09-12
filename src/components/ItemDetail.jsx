import { Box, LinearProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import ItemCount from "./ItemCount";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ item }) => {
	const onAdd = () => {
		console.log(`compraste ${count} items del producto ${item.title}`)
		setCompra(true)
	};
	const [count, setCount] = useState(1);
	const [compra, setCompra] = useState(false);
	const navigate = useNavigate()

	if (!item) {
		return (
			<Box sx={{ width: "100%" }}>
				<LinearProgress />
			</Box>
		);
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
			<Box>
				<Box
					component="img"
					src={item.pictureURL}
					alt={item.pictureAlt}
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
					{item.title}
				</Typography>
				<Typography
					variant="body"
					component="div"
					sx={{ mb: 2 }}>
					{item.brand}
				</Typography>
				<Typography
					variant="body"
					color="text.secondary"
					sx={{ mb: 2 }}>
					$ {item.price}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{ mb: 2 }}>
					Stock: {item.stock}
				</Typography>
				{!compra ? (
					<ItemCount
						stock={item.stock}
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

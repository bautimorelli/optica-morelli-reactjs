import {
	Box,
	Divider,
	IconButton,
	Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useCart } from "../context/CartContext";
import InputSpinner from "./InputSpinner";

const CartItem = ({ product }) => {
	const { pictureURL, name, price, id, quantity } = product;
	const { removeItem, updateQuantity } = useCart();

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexFlow: "row nowrap",
					justifyContent: "space-between",
					alignItems: "center",
					mx: 5,
					height: 100,
					overflow: "auto",
				}}>
				<Box
					sx={{
						display: "flex",
						flexFlow: "row nowrap",
						justifyContent: "flex-start",
						alignItems: "center",
						mx: 1,
					}}>
					<Box
						component="img"
						src={pictureURL}
						sx={{
							objectFit: "contain",
							width: 150,
							maxHeight:100
						}}
					/>
					<Typography
						variant="h6"
						marginX="15px">
						{name}
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexFlow: "row nowrap",
						justifyContent: "flex-end",
						alignItems: "center",
						mx: 1,
					}}>
					<Typography
						variant="h6"
						marginX={1}>
						${Intl.NumberFormat(navigator.language).format(price)}
					</Typography>
					<InputSpinner quantity={quantity} addFunction={() => updateQuantity(id, 1)} lessFunction={() => updateQuantity(id, -1)}/>
					<Typography
						variant="h6"
						marginX={1}>
						${Intl.NumberFormat(navigator.language).format(price * quantity)}
					</Typography>
					<IconButton
						sx={{ mx: 1 }}
						onClick={() => {
							removeItem(id);
						}}>
						<DeleteIcon />
					</IconButton>
				</Box>
			</Box>
			<Divider variant="middle" />
		</>
	);
};

export default CartItem;

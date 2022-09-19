import {
	Box,
	Button,
	ButtonGroup,
	Divider,
	IconButton,
	Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useCart } from "../context/CartContext";

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
						marginX="10px">
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
						${price}
					</Typography>
					<ButtonGroup
						variant="text"
						sx={{
							border: 1,
							borderColor: "primary.main",
							borderRadius: "16px",
							justifyContent: "flex-end",
							maxWidth: 130,
							mx: 2,
						}}>
						<Button
							sx={{ borderRight: "0!important" }}
							onClick={() => {
								updateQuantity(id, -1);
							}}>
							-
						</Button>
						<Typography
							variant="body1"
							mx={2}
							my={1}>
							{quantity}
						</Typography>
						<Button
							onClick={() => {
								updateQuantity(id, 1);
							}}>
							+
						</Button>
					</ButtonGroup>
					<Typography
						variant="h6"
						marginX={1}>
						${price * quantity}
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

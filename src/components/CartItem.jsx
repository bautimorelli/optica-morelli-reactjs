import { Box, Divider, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useCart } from "../context/CartContext";
import InputSpinner from "./InputSpinner";
import { useTheme } from "@mui/material/styles";

const CartItem = ({ product, setToast }) => {
	const { pictureURL, name, price, id, quantity } = product;
	const { removeItem, updateQuantity } = useCart();
	const theme = useTheme();

	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					flexFlow: "row wrap",
					[theme.breakpoints.down("md")]: {
						justifyContent: "center",
					},
					[theme.breakpoints.up("md")]: {
						justifyContent: "space-between",
					},
					alignItems: "center",
					mx: 5,
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
						title={name}
						alt={name}
						sx={{
							objectFit: "contain",
							width: 150,
							maxHeight: 100,
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
						marginY: 3
					}}>
					<Typography
						variant="h6"
						marginX={1}>
						${Intl.NumberFormat(navigator.language).format(price)}
					</Typography>
					<InputSpinner
						quantity={quantity}
						addFunction={() => updateQuantity(id, 1)}
						lessFunction={() => updateQuantity(id, -1)}
					/>
					<Typography
						variant="h6"
						marginX={1}>
						$
						{Intl.NumberFormat(navigator.language).format(
							price * quantity
						)}
					</Typography>
					<IconButton
						sx={{ mx: 1 }}
						onClick={() => {
							setToast(true)
							removeItem(id)
						}}>
						<DeleteIcon />
					</IconButton>
				</Box>
			</Box>
			<Divider variant="middle" />
		</Box>
	);
};

export default CartItem;

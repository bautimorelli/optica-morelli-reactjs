import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
	const navigate = useNavigate();
	const [count, setCount] = useState(0);
	const { itemCount, cart } = useCart();

	useEffect(() => {
		setCount(itemCount());
	}, [cart, itemCount]);

	return (
		<IconButton
			size="large"
			color="inherit"
			onClick={() => navigate("/cart")}>
			<Badge
				badgeContent={count}
				color="error">
				<ShoppingCartIcon />
			</Badge>
		</IconButton>
	);
};

export default CartWidget;

import React from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const CartWidget = () => {
	return (
        <IconButton size="large" color="inherit">
        <Badge
            badgeContent={2}
            color="error">
            <ShoppingCartIcon />
        </Badge>
    </IconButton>
    )
}

export default CartWidget

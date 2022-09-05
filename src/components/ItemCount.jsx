import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ItemCount = ({ stock, initial, onAdd }) => {
	const [count, setCount] = useState(initial);

	const updateCount = (number) => {
		if (count + number >= 0 && count + number <= stock) {
			setCount(count + number);
		}
	};

	const addToCart = () => {
		if (stock > 0 && count > 0) {
			onAdd(count);
		}
	};

	return (
		<Box sx={{ display: "inline-flex", flexDirection: "column", mx: 1, my: 3 }}>
			<ButtonGroup
				variant="text"
				sx={{
					border: 1,
					borderColor: "primary.main",
					borderRadius: "16px",
					mx: 4,
					justifyContent: "flex-end",
					maxWidth: 130
				}}>
				<Typography
					variant="body1"
					mx={2}
					my={1}>
					{count}
				</Typography>
				<Button onClick={() => updateCount(-1)}>-</Button>
				<Button onClick={() => updateCount(1)}>+</Button>
			</ButtonGroup>
			<Button
				variant="outlined"
				sx={{ my: 2, maxWidth:200 }}
				onClick={addToCart}>
				Agregar al Carrito
			</Button>
		</Box>
	);
};

export default ItemCount;

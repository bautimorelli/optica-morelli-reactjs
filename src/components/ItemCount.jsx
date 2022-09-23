import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputSpinner from "./InputSpinner";

const ItemCount = ({ stock, onAdd, count, setCount }) => {
	const updateCount = (number) => {
		if (count + number > 0 && count + number <= stock) {
			setCount(count + number);
		}
	};

	const addToCart = () => {
		if (stock > 0 && count > 0) {
			onAdd(count);
		}
	};

	return (
		<Box
			sx={{
				display: "inline-flex",
				flexDirection: "column",
				mx: 1,
				my: 3,
			}}>
			<InputSpinner
				quantity={count}
				addFunction={() => updateCount(1)}
				lessFunction={() => updateCount(-1)}
			/>
			<Button
				variant="outlined"
				sx={{ my: 2, maxWidth: 200 }}
				onClick={addToCart}>
				Agregar al Carrito
			</Button>
		</Box>
	);
};

export default ItemCount;

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import InputSpinner from "./InputSpinner"
const ItemCount = ({ stock, onAdd, count, setCount }) => {
	const updateCount = (number) => {
		if (count + number > 0 && count + number <= stock) {
			setCount(count + number)
		}
	}

	const addToCart = () => {
		if (stock > 0 && count > 0) {
			onAdd(count)
		}
	}

	return (
		<Box
			sx={{
				display: "inline-flex",
				flexDirection: "row",
				flexWrap: "wrap",
				alignItems: "center",
				my: 1,
			}}>
			<InputSpinner
				quantity={count}
				addFunction={() => updateCount(1)}
				lessFunction={() => updateCount(-1)}
			/>
			<Button
				variant="contained"
				sx={{ maxWidth: 200, height: 42, my: 2, mx: 1 }}
				onClick={addToCart}>
				Agregar al Carrito
			</Button>
		</Box>
	)
}

export default ItemCount

import { Box, LinearProgress } from "@mui/material";
import Item from "./Item";

const ItemList = ({ items }) => {
	if (items.length === 0) {
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
				mx: 3,
			}}>
			{items.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</Box>
	);
};

export default ItemList;

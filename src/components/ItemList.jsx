import { Box} from "@mui/material";
import Item from "./Item";

const ItemList = ({ items }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexFlow: "row wrap",
				justifyContent: "center",
				mx: 3,
			}}>
			{items.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</Box>
	);
};

export default ItemList;

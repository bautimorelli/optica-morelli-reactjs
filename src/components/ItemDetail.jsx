import { Box, LinearProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
	const onAdd = (number) => { console.log("Se agregaron " + number + " items al carrito") };
    
    console.log(item);
    if (!item) {
		return (
			<Box sx={{ width: "100%" }}>
			<LinearProgress />
			</Box>
		);
	}

	return (
		<Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"center", my: 6 }}>
			<Box>
				<Box
					component="img"
					src={item.pictureURL}
					alt={item.pictureAlt}
					sx={{ objectFit: "contain", maxHeight: 300, maxWidth: 450, mr: 5 }}
				/>
			</Box>
			<Box sx={{ display: "inline-flex", flexDirection: "column", flexWrap: "wrap", ml: 5 }}>
				<Typography
					variant="h4"
					component="div"
                    sx={{mb: 1}}>
					{item.title}
				</Typography>
                <Typography
					variant="body"
					component="div"
                    sx={{mb: 2}}>
					{item.brand}
				</Typography>
				<Typography
					variant="body"
					color="text.secondary"
                    sx={{mb: 2}}>
					$ {item.price}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
                    sx={{mb: 2}}>
					Stock: {item.stock}
				</Typography>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
			</Box>
		</Box>
	);
};

export default ItemDetail;

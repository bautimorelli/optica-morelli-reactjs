import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
	const onAdd = (number) => {console.log("Se agregaron " + number + " items al carrito")}
    
    if (!item) {
		return <div>ALGO</div>;
	}
	return (
		<Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"center", my: 6 }}>
            {console.log(item)}
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
					variant="body2"
					color="text.secondary"
                    sx={{mb: 2}}>
					{item.category}
				</Typography>
				<Typography
					variant="body"
					color="text.secondary"
                    sx={{mb: 2}}>
					$ {item.price}
				</Typography>
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>
			</Box>
		</Box>
	);
};

export default ItemDetail;

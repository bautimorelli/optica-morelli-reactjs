import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";

const Item = ({ item }) => {
	return (
		<Grow in={true}>
			<Card sx={{ width: 290, m: 5, boxShadow: 2 }}>
				<CardMedia
					component="img"
					height="250"
					image={item.pictureURL}
					alt={item.pictureAlt}
					sx={{ objectFit: "contain" }}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div">
						{item.title} - {item?.brand}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary">
						${item.price}
					</Typography>
				</CardContent>
				<CardActions sx={{ justifyContent: "center" }}>
					<Button
						size="small"
						variant="outlined">
						Ver producto
					</Button>
				</CardActions>
			</Card>
		</Grow>
	);
};

export default Item;

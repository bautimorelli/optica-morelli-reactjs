import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grow from "@mui/material/Grow";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
	const { id, name, pictureURL, price } = item
	const navigate = useNavigate()

	return (
		<Grow in={true}>
			<Card sx={{ minWidth: 340, m: 4, boxShadow: 1, maxWidth: 400, flex: 1 }}>
				<CardMedia
					component="img"
					height="250"
					image={pictureURL}
					alt={name}
					title={name}
					sx={{ objectFit: "scale-down" }}
				/>
				<CardContent sx={{display:"flex", flexFlow:"column nowrap" , alignItems: "center" }}>
					<Typography
						gutterBottom
						variant="h5"
						component="div">
						{name}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary">
						$ {price}
					</Typography>
				</CardContent>
				<CardActions sx={{ justifyContent: "center" }}>
					<Button
						size="small"
						variant="text"
						onClick={()=>navigate(`item/${id}`)}
						>
						Ver producto
					</Button>
				</CardActions>
			</Card>
		</Grow>
	)
}

export default Item

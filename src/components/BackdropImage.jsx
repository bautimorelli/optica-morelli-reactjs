import React from "react";
import { Box } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { useTheme } from "@mui/material/styles";

const BackdropImage = ({ name, pictureURL }) => {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};
	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<Box
			sx={{
				[theme.breakpoints.down("sm")]: {
					width: 350,
				},
				[theme.breakpoints.up("sm")]: {
					width: 450,
				},
			}}>
			<Box
				onClick={handleToggle}
				component="img"
				src={pictureURL}
				alt={name}
				title={name}
				sx={{
					display:"block",
					objectFit: "contain",
					margin:"auto",
					maxHeight: 300,
					[theme.breakpoints.down("sm")]: {
						maxWidth: 350,
					},
					[theme.breakpoints.up("sm")]: {
						maxWidth: 450,
					},
				}}
			/>
			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={open}
				onClick={handleClose}>
				<Box
					component="img"
					src={pictureURL}
					alt={name}
					title={name}
					sx={{
						objectFit: "contain",
						[theme.breakpoints.down("sm")]: {
							maxHeight: "80vh",
							maxWidth: "100vw",
						},
						[theme.breakpoints.up("sm")]: {
							maxHeight: "80vh",
							maxWidth: "80vw",
						},
					}}
				/>
			</Backdrop>
		</Box>
	);
};

export default BackdropImage;

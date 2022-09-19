import React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
	return (
		<MuiAlert
			elevation={6}
			ref={ref}
			variant="filled"
			{...props}
		/>
	);
});

const FinishedCartButton = () => {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	const action = (
		<React.Fragment>
			<Button
				color="secondary"
				size="small"
				onClick={handleClose}>
				UNDO
			</Button>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}>
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	);

	return (
		<>
			<Button
				sx={{ m: "10px" }}
				variant="contained"
				onClick={handleClick}>
				Terminar Compra
			</Button>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				action={action}>
				<Alert
					onClose={handleClose}
					severity="success"
					sx={{ width: "100%" }}>
					Felicidades por completar su compra!
				</Alert>
			</Snackbar>
		</>
	);
};

export default FinishedCartButton;

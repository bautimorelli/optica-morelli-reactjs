import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Button } from "@mui/material";
import { useCart } from "../context/CartContext";

const Transition = React.forwardRef(function Transition(props, ref) {
	return (
		<Slide
			direction="up"
			ref={ref}
			{...props}
		/>
	);
});

const EmptyCartButton = () => {
    const {clear } = useCart();
    const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true)
	};
	const handleClose = () => {
		setOpen(false)
	};
	const handleCloseAgree = () => {
		setOpen(false)
		clear()
	};
    
	return (
		<>
			<Button
				sx={{ m: "10px" }}
				onClick={handleClickOpen}>
				Vaciar Carrito
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}>
				<DialogTitle>
					{"Seguro que desea vaciar el carrito?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						Se perderan todos los items guardados en el carrito
						hasta el momento
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancelar</Button>
					<Button onClick={handleCloseAgree}>Aceptar</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default EmptyCartButton;
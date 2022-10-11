import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { database } from "../firebase/firebase";
import { Box, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { addDoc, collection } from "firebase/firestore";
import Toast from "./Toast";

const Checkout = () => {
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [showId, setShowId] = useState(false);
	const [loading, setLoading] = useState(false);
	const [toast, setToast] = useState(false);

	const { cart, totalPrice, clear } = useCart();

	const checkoutForm = (e) => {
		e.preventDefault();
		setLoading(true);

		let order = {
			buyer: {
				name,
				email,
				phone,
			},
			items: cart.map((item) => ({
				id: item.id,
				name: item.name,
				price: item.price,
				quantity: item.quantity,
			})),
			total: totalPrice(),
			date: new Date().toISOString().replace("T", " | "),
		};
		const orderCollection = collection(database, "orders");
		addDoc(orderCollection, order)
			.then(({ id }) => setId(id))
			.catch((e) => {
				setToast(true);
			})
			.finally(() => {
				setShowId(true);
				clear();
			});
	};

	return (
		<Box>
			<Toast
				text={"Error, vuelva a intentar mas tarde"}
				time={2000}
				type={"error"}
				open={toast}
				setOpen={setToast}
			/>
			{showId ? (
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						my: "30vh",
						mx: "25px",
					}}>
					<Typography variant="h4">
						Su compra fue realizada correctamente con el
						identificador:
						<Typography
							variant="h4"
							color={"#FF0000"}
							sx={{
								overflowWrap: "anywhere",
							}}>
							{id}
						</Typography>
					</Typography>
				</Box>
			) : (
				<>
					<Box
						component="form"
						onSubmit={checkoutForm}
						sx={{
							maxWidth: "25%",
							mx: "auto",
							my: "20vh",
							minWidth: "250px",
							boxShadow: 6,
							padding: 3,
							borderRadius: 4,
						}}>
						<Typography my={0}>Checkout</Typography>
						<TextField
							fullWidth
							required
							variant="standard"
							margin="normal"
							label="Nombre"
							//inputProps={{pattern: "^([ \u00c0-\u01ffa-zA-Z'\-])+$"}}
							onChange={(e) => setName(e.target.value)}
						/>
						<TextField
							fullWidth
							required
							variant="standard"
							margin="normal"
							label="Email"
							//inputProps={{pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							fullWidth
							required
							variant="standard"
							margin="normal"
							label="Celular"
							//inputProps={{pattern: "^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"}}
							helperText="Tu numero sin el 15"
							onChange={(e) => setPhone(e.target.value)}
						/>
						<LoadingButton
							type="submit"
							loading={loading}
							variant="contained"
							sx={{ mt: 3 }}>
							Comprar
						</LoadingButton>
					</Box>
				</>
			)}
		</Box>
	);
};

export default Checkout;

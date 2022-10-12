import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { database } from "../firebase/firebase";
import { Box, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import Toast from "./Toast";
import CheckoutForm from "./CheckoutForm";
import Ticket from "./Ticket";
import EmptyCart from "./EmptyCart";

const Checkout = () => {
	const [id, setId] = useState("");
	const [showId, setShowId] = useState(false);
	const [toast, setToast] = useState(false);
	const { cart, totalPrice, clear} = useCart();
	const [savedCart, setSavedCart] = useState();
	const [savedTotal, setSavedTotal] = useState();
	

	const submitCheckout = (name, email, phone) => {
		setSavedCart(cart)
		setSavedTotal(totalPrice())
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
				clear()
			});
	};

	return (
		
		<Box>
			{cart.length === 0 ? (
				<EmptyCart/>
			) : (
			<>
			<Toast
				text={"Error, vuelva a intentar mas tarde"}
				time={2000}
				type={"error"}
				open={toast}
				setOpen={setToast}
			/>
			{showId ? (
				<>
					<Ticket id={id} cart={savedCart} total={savedTotal} />
				</>
			) : (
				<>
					<Box
						sx={{
							maxWidth: "25vw",
							mx: "auto",
							my: "20vh",
							minWidth: "250px",
							boxShadow: 6,
							padding: 3,
							borderRadius: 4,
						}}>
						<Typography
							sx={{
								textAlign: "center",
								marginY: 2,
								fontSize: "2rem",
							}}>
							Checkout
						</Typography>
						<CheckoutForm submitCheckout={submitCheckout} />
					</Box>
				</>
			)}
			</>
			)}
		</Box>
	);
};

export default Checkout;

import React, { useState } from "react"
import { useCart } from "../context/CartContext"
import { database } from "../firebase/firebase"
import { Box, Typography } from "@mui/material"
import { addDoc, collection, doc, writeBatch } from "firebase/firestore"
import Toast from "./Toast"
import CheckoutForm from "./CheckoutForm"
import Ticket from "./Ticket"
import EmptyCart from "./EmptyCart"

const Checkout = () => {
	const { cart, totalPrice, clear } = useCart()
	const [id, setId] = useState(null)
	const [toast, setToast] = useState(false)
	const [savedCart] = useState(cart)
	const [savedTotal] = useState(totalPrice())

	const submitCheckout = (name, email, phone) => {
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
		}
		const orderCollection = collection(database, "orders")
		updateStocks()
		addDoc(orderCollection, order)
			.then(({ id }) => setId(id))
			.catch((e) => {
				setToast(true)
			})
			.finally(() => {
				clear()
			})
	}

	const updateStocks = () => {
		const batch = writeBatch(database)
		cart.map((item) =>
			batch.update(doc(database, "products", item.id), {
				stock: item.stock - item.quantity,
			})
		)
		batch.commit()
	}

	if (cart.length === 0 && id === null) {
		return <EmptyCart />
	}

	if (id != null) {
		return (
			<Ticket
				id={id}
				cart={savedCart}
				total={savedTotal}
			/>
		)
	}

	return (
		<Box>
			<Toast
				text={"Error, vuelva a intentar mas tarde"}
				time={2000}
				type={"error"}
				open={toast}
				setOpen={setToast}
			/>
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
		</Box>
	)
}

export default Checkout

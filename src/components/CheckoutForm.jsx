import React, { useState } from "react"
import { LoadingButton } from "@mui/lab"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import { Box } from "@mui/system"

const CheckoutForm = ({ submitCheckout }) => {
	const [email, setEmail] = useState("")
	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [loading, setLoading] = useState(false)

	const handleSubmit = (e) => {
		setLoading(true)
		submitCheckout(name, email, phone)
	}

	return (
		<ValidatorForm onSubmit={handleSubmit}>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<TextValidator
					label="Nombre"
					name="nombre"
					value={name}
					validators={[
						"required",
						String.raw`matchRegexp:^([ \u00c0-\u01ffa-zA-Z'\-])+$`,
					]}
					errorMessages={[
						"this field is required",
						"El nombre no es valido",
					]}
					onChange={(e) => setName(e.target.value)}
					sx={{ marginY: 1, width: "100%" }}
				/>
				<TextValidator
					label="Email"
					name="email"
					value={email}
					validators={["required", "isEmail"]}
					errorMessages={[
						"this field is required",
						"El email no es valido",
					]}
					onChange={(e) => setEmail(e.target.value)}
					sx={{ marginY: 1, width: "100%" }}
				/>
				<TextValidator
					label="Celular"
					name="celular"
					value={phone}
					validators={[
						"required",
						String.raw`matchRegexp:^\d{10,11}$`,
					]}
					errorMessages={[
						"this field is required",
						"El telefono no es valido",
					]}
					onChange={(e) => setPhone(e.target.value)}
					sx={{ marginY: 1, width: "100%" }}
				/>
				<LoadingButton
					type="submit"
					loading={loading}
					variant="contained"
					sx={{ mt: 3, mx: "auto" }}>
					Comprar
				</LoadingButton>
			</Box>
		</ValidatorForm>
	)
}

export default CheckoutForm

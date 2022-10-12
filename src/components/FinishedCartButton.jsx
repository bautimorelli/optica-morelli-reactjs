import React from "react"
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"

const FinishedCartButton = () => {
	const navigate = useNavigate()

	return (
		<>
			<Button
				sx={{ m: "10px" }}
				variant="contained"
				onClick={() => navigate("/checkout")}>
				Terminar Compra
			</Button>
		</>
	)
}

export default FinishedCartButton

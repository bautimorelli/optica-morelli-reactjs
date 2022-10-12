import React, { forwardRef } from "react"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"

const Alert = forwardRef(function Alert(props, ref) {
	return (
		<MuiAlert
			elevation={6}
			ref={ref}
			variant="filled"
			{...props}
		/>
	)
})

const Toast = ({ text, time, type, open, setOpen }) => {
	const handleClose = (reason) => {
		if (reason === "clickaway") {
			return
		}

		setOpen(false)
	}

	return (
		<Snackbar
			open={open}
			autoHideDuration={time}
			onClose={handleClose}>
			<Alert
				onClose={handleClose}
				severity={type}
				sx={{ width: "100%" }}>
				{text}
			</Alert>
		</Snackbar>
	)
}

export default Toast

import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";

const InputSpinner = ({ quantity, addFunction, lessFunction }) => {
	return (
		<ButtonGroup
			variant="text"
			sx={{
				border: 1,
				borderColor: "primary.main",
				borderRadius: "16px",
				justifyContent: "space-between",
				height: 40,
				mx: 1
			}}>
			<Button
				sx={{ borderRight: "0!important" }}
				onClick={lessFunction}>
				-
			</Button>
			<Typography
				variant="body1"
				mx={2}
				my={1}>
				{quantity}
			</Typography>
			<Button onClick={addFunction}>+</Button>
		</ButtonGroup>
	);
};

export default InputSpinner;

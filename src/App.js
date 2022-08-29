import { ThemeProvider } from "@mui/material";
import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import theme from "./MuiTheme";

function App() {
	function onAdd(number) {
		return console.log("Se agregaron " + number + " items al carrito");
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<NavBar />
				<ItemListContainer greeting="Bienvenidos a mi tienda" />
			</ThemeProvider>
			<ItemCount
				stock={10}
				initial={0}
				onAdd={onAdd}
			/>
		</>
	);
}

export default App;

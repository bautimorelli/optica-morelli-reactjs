import { ThemeProvider } from "@mui/material";
import "./App.css";
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
			</ThemeProvider>
			<ItemListContainer/>
		</>
	);
}

export default App;

import { ThemeProvider } from "@mui/material";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import theme from "./MuiTheme";

function App() {

	return (
		<>
			<ThemeProvider theme={theme}>
				<NavBar />
			</ThemeProvider>
			{/* <ItemListContainer/> */}
			<ItemDetailContainer/>
		</>
	);
}

export default App;

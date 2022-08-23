import { ThemeProvider } from "@mui/material";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import theme from './MuiTheme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<ItemListContainer greeting="Bienvenidos a mi tienda" />
		</ThemeProvider>
	);
}

export default App;

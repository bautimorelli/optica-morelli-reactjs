import { ThemeProvider } from "@mui/material"
import "./App.css"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import theme from "./MuiTheme"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./components/Cart"
import { CartProvider } from "./context/CartContext"
import Checkout from "./components/Checkout"

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<NavBar />
				</ThemeProvider>
				<Routes>
					<Route
						path="/"
						element={<ItemListContainer />}
					/>
					<Route
						path="/category/:categoryId"
						element={<ItemListContainer />}
					/>
					<Route
						path="/item/:id"
						element={<ItemDetailContainer />}
					/>
					<Route
						path="/cart"
						element={<Cart />}
					/>
					<Route
						path="/checkout"
						element={<Checkout />}
					/>
				</Routes>
			</BrowserRouter>
		</CartProvider>
	)
}

export default App

import "./App.css";
import ItemListContainer from "./components/itemListContainer";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer greeting="Bienvenidos a mi tienda" />
		</>
	);
}

export default App;

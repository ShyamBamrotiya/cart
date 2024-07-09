import "./App.css";
import Item from "./Components/item";
import Cart from "./Components/cart";

function App() {
	return (
		<div className="App">
			<Item
				name="Asus Tuf Gaming 15"
				price="75000"
			/>
			<Item
				name="Gigabyte G24F 2 Gaming"
				price="12400"
			/>
			<Item
				name="ReadGear Keyboard"
				price="1200"
			/>
			<Item
				name="Realme X7 Max"
				price="25000"
			/>
			<Cart />
		</div>
	);
}

export default App;

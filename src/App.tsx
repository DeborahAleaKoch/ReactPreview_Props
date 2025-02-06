import "./App.css";
import { ProductCard } from "./components/Products";
import { products } from "./data";

import { ToDoList } from "./components/ToDoList";
import { Header } from "./components/Header";
import { AnimalView } from "./components/AnimalView";
import { animals } from "./animal-data";
import { Footer } from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<AnimalView animals={animals} />
			<Footer />
			<br></br>
			<h1>React-Props_Todo-Level-1_1</h1>
			<ToDoList />
			<br></br>
			<h1>React-Props-Products-Level-2_1</h1>
			<ProductCard products={products} />
		</>
	);
}

export default App;

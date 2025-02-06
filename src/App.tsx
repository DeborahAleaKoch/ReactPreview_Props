import "./App.css";
import { ProductCard } from "./components/Products";
import { products } from "./data";

import { ToDoList } from "./components/ToDoList";

function App() {
	return (
		<>
			<h1>React-Props_Todo-Level-1_1</h1>
			<ToDoList />
			<br></br>
			<h1>React-Props-Products-Level-2_1</h1>
			<ProductCard products={products} />
		</>
	);
}

export default App;

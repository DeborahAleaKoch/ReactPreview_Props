import "./App.css";
import { ProductCard } from "./components/Products";

import { ToDoList } from "./components/TodoList";

function App() {
	return (
		<>
			<h1>React-Props_Todo-Level-1_1</h1>
			<ToDoList />
			<br></br>
			<h1>React-Props-Products-Level-2_1</h1>
			<ProductCard />
		</>
	);
}

export default App;

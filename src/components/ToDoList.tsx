import { toDos } from "../data";

export function ToDoList() {
	return (
		<ul>
			{toDos.map(({ text }) => {
				return <li>{text}</li>;
			})}
		</ul>
	);
}

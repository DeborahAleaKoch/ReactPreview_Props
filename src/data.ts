// Erstelle dir eine “Datenbank” (data mit Array und Objekten)

export type ToDo = {
	text: string;
	done: boolean;
};

export const toDos: ToDo[] = [
	{ text: "Aufräumen", done: false },
	{ text: "einkaufen", done: false },
	{ text: "Kuchen backen", done: false },
	{ text: "Serien gucken", done: false },
];

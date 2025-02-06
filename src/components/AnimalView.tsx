import { useState } from "react";
import { Animal } from "../animal-data";
import { AnimalCard } from "./AnimalCard";

interface Props {
	animals: Animal[];
}

export function AnimalView({ animals }: Props) {
	const [searchValue, setSearchValue] = useState<string>("");

	const filteredAnimals = animals.filter((animal) =>
		animal.name.toLowerCase().includes(searchValue.toLowerCase())
	);

	return (
		<>
			<input
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
			></input>
			<div className='grid grid-cols-3 gap-5 mx-3 pb-5'>
				{filteredAnimals.map((animal) => (
					<AnimalCard key={animal.name} animal={animal} />
				))}
			</div>
		</>
	);
}

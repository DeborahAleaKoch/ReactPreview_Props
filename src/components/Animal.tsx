import { Animal } from "../animal-data";

interface Props {
	animals: Animal[];
}

export function AnimalCard({ animals }: Props) {
	return (
		<div className='grid grid-cols-3 gap-5 mx-3'>
			{animals.map((animal) => {
				return (
					<div className=''>
						<div className='flex flex-col items-center gap-2 shadow-md  rounded-t-lg py-5  bg-slate-600'>
							<p className='text-7xl'>{animal.emoji}</p>
							<h1>{animal.name}</h1>
							<h3>{animal.habitat}</h3>
							<h3>{animal.diet}</h3>
							<p>{animal.lifespan} years</p>
						</div>
						<div className='bg-slate-500'>
							<ul className='list-disc px-8'>
								<li>{animal.funFacts[0]}</li>
								<li>{animal.funFacts[1]}</li>
								<li>{animal.funFacts[2]}</li>
							</ul>
						</div>
					</div>
				);
			})}
		</div>
	);
}

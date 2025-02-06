import { Animal } from "../animal-data";

interface Props {
	animal: Animal;
}

export const AnimalCard: React.FunctionComponent<Props> = ({ animal }) => {
	if (animal === undefined) {
		return null;
	}

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
					{animal.funFacts.map((funFact) => (
						<li key={funFact}>{funFact}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

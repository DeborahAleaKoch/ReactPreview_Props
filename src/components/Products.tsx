import { ProductDetails, products } from "../data";

export function ProductCard() {
	return (
		<div className='grid grid-cols-3'>
			{products.map((props) => {
				return (
					<div key={props.name} className='shadow-md m-3 p-3'>
						<img src={props.img} alt={props.name} className='object-cover' />
						<h3 className='text-center'>{props.name}</h3>
						<p className='text-center'>${props.price}</p>
						<div className='flex justify-center my-3'>
							<button className='border-2 border-rose-400 bg-rose-300 text-white px-3 rounded-md'>
								BUY NOW
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}

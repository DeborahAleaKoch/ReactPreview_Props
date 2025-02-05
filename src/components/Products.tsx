import { ProductDetails, products } from "../data";

interface Props {
	products: ProductDetails[];
}

export function ProductCard({ products }: Props) {
	return (
		<div className='grid grid-cols-3'>
			{products.map((product) => {
				return (
					<div key={product.name} className='shadow-md m-3 p-3'>
						<img
							src={product.img}
							alt={product.name}
							className='object-cover'
						/>
						<h3 className='text-center'>{product.name}</h3>
						<p className='text-center'>${product.price}</p>
						<div className='flex justify-center'>
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

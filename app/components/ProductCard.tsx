import Image from 'next/image';
import Link from 'next/link';
import AddToCartControl from './AddToCartControl';

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4  flex flex-col min-h-full">
      <Image
        src={image}
        alt={name}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 mt-2">${price.toFixed(2)}</p>
      <div className="mt-auto">
        <span className='flex flex-wrap justify-between items-center mt-4 gap-2'>
          <Link href={`/products/${id}`} className="px-6 py-3 text-center items-center justify-center bg-green-600 text-white rounded-md hover:bg-green-700 hover:scale-110 delay-150 ease-in-out duration-300 transition whitespace-normal break-words">
            View Details
          </Link>
          <div className=''>
            <AddToCartControl product={{
              id: id,
              name: name,
              price: price,
              image: image,
            }} />
          </div>
        </span>
      </div>
    </div>
  );
}

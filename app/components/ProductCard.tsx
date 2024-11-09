import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Image
        src={image}
        alt={name}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 mt-2">${price.toFixed(2)}</p>
      <Link href={`/products/${id}`} className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
        View Details
      </Link>
    </div>
  );
}

// app/products/[id]/page.tsx

import Image from 'next/image';
import { notFound } from 'next/navigation';

// Mock Product Data
const mockProducts = [
  {
    id: 1,
    name: 'Eco-Friendly Water Bottle',
    price: 19.99,
    image: '/placeholder-product.jpg',
    description: 'A reusable water bottle made from sustainable materials, perfect for reducing plastic waste.',
  },
  {
    id: 2,
    name: 'Reusable Grocery Bag Set',
    price: 14.99,
    image: '/placeholder-product.jpg',
    description: 'Set of eco-friendly reusable grocery bags to replace single-use plastic bags.',
  },
  {
    id: 3,
    name: 'Bamboo Toothbrush Pack',
    price: 12.99,
    image: '/placeholder-product.jpg',
    description: 'Pack of bamboo toothbrushes, a biodegradable alternative to plastic toothbrushes.',
  },
  // Add more mock products as needed
];

type ProductProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: ProductProps) {
  const { id } = await params;

  // Find the product by id
  const product = mockProducts.find((product) => product.id === Number(id));

  // If product not found, render 404 page
  if (!product) {
    notFound();
    return null;
  }

  return (
    <main className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-1">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-xl text-green-600">${product.price.toFixed(2)}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
          
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

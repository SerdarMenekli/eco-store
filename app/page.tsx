// app/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 space-y-10">
      {/* Hero Section */}
      <section className="w-full max-w-5xl bg-green-100 rounded-lg shadow-md p-8 text-center">
        <h1 className="text-4xl font-bold text-green-800">
          Welcome to Eco-Store
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Discover sustainable products that make a difference. Shop eco-friendly essentials, reduce waste, and join us in caring for the planet.
        </p>
        <Link href="/products" className="mt-6 inline-block px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <section className="w-full max-w-5xl">
        <h2 className="text-3xl font-semibold text-gray-800">Featured Products</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Product Card - Repeat for each featured product */}
          {[1, 2, 3].map((product) => (
            <div key={product} className="bg-white rounded-lg shadow-lg p-4">
              <Image
                src="/placeholder-product.jpg" // Replace with actual product image
                alt="Eco-Friendly Product"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-800">
                Eco Product {product}
              </h3>
              <p className="mt-2 text-gray-600">Description of the eco-friendly product here.</p>
              <Link href={`/products/eco-product-${product}`} className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                View Product
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Message */}
      <section className="w-full max-w-5xl bg-green-50 rounded-lg shadow-md p-8 text-center">
        <h2 className="text-3xl font-semibold text-green-800">Why Choose Us?</h2>
        <p className="mt-4 text-lg text-gray-700">
          At Eco-Store, we prioritize sustainability in every product we offer. From organic materials to waste reduction, every purchase makes a positive impact.
        </p>
      </section>
    </main>
  );
}


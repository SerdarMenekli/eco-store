"use client";
import ProductCard from '../components/ProductCard';
import { Suspense, useEffect, useState } from 'react';
import { Product } from '@prisma/client';
import CategoryFilter from '../components/CategoryFilter';
import { useSearchParams } from 'next/navigation';

// const mockProducts = [
//   {
//     id: 1,
//     name: 'Eco-Friendly Water Bottle',
//     price: 19.99,
//     image: '/placeholder-product.jpg',
//   },
//   {
//     id: 2,
//     name: 'Reusable Grocery Bag Set',
//     price: 14.99,
//     image: '/placeholder-product.jpg',
//   },
//   {
//     id: 3,
//     name: 'Bamboo Toothbrush Pack',
//     price: 12.99,
//     image: '/placeholder-product.jpg',
//   },
// ];

// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.BASE_URL}/api/products`);
//   const products = await res.json();
//   return { props: { products } };
// }

// const products = getServerSideProps();

export default function ProductsPage(){
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products />
    </Suspense>
  );
}

function Products() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await fetch('/api/products');
  //     const data = await res.json();
  //     setProducts(data);
  //   };

  //   fetchProducts();
  // }, []);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`/api/products?page=${page}&limit=12${category ? `&category=${category}` : ""}&search=${encodeURIComponent(searchQuery)}`);
      const data = await res.json();
      setProducts(data.products);
      setTotalPages(data.totalPages);
    };

    fetchProducts();
  }, [page, searchQuery, category]);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <main className="md:w-[95%] mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Our Products</h1>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-12 lg:col-span-3 order-first lg:order-none'>
          <CategoryFilter />
        </div>
        <div className='col-span-12 lg:col-span-9 '>
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* {mockProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))} */}
            {products.map((product: Product) => (
              <ProductCard
                key={product.id}
                {...product}
                image={product.image || '/default-placeholder-image.jpg'}
              />
            ))}
          </div>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <button
              disabled={page === 1}
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              &lt;
            </button>
            <span className="text-lg font-semibold">{page} / {totalPages}</span>
            <button
              disabled={page === totalPages}
              onClick={handleNext}
              className="px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

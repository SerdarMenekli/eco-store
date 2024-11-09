import ProductCard from '../components/ProductCard';

const mockProducts = [
  {
    id: 1,
    name: 'Eco-Friendly Water Bottle',
    price: 19.99,
    image: '/placeholder-product.jpg',
  },
  {
    id: 2,
    name: 'Reusable Grocery Bag Set',
    price: 14.99,
    image: '/placeholder-product.jpg',
  },
  {
    id: 3,
    name: 'Bamboo Toothbrush Pack',
    price: 12.99,
    image: '/placeholder-product.jpg',
  },
];

export default function ProductsPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </main>
  );
}

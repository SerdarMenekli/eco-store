'use client';  // Make this a client component

import { useAppDispatch } from '@/lib/hooks';
import { addItem } from '@/lib/features/cart/cartSlice';
import { Product } from '@/lib/types';

export default function AddToCartButton({ product }: { product: Product }) {
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        dispatch(addItem({ id: product.id, name: product.name, price: product.price, quantity: 1 }));
    };

    return (
        <button
            className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            onClick={handleAddToCart}>
            Add to Cart
        </button>
    );
}

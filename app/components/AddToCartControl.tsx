'use client';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addItem, updateItemQuantity, removeItem } from '@/lib/features/cart/cartSlice';
import { useState } from 'react';
import { Product } from '@/lib/types';

export default function AddToCartControl({ product }: { product: Product }) {
    const dispatch = useAppDispatch();
    const cartItem = useAppSelector(state => state.cart.items.find(item => item.id === product.id));
    const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);

    const handleAddToCart = () => {
        dispatch(addItem({ ...product, quantity: 1 }));
        setQuantity(1);
    };

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
        dispatch(updateItemQuantity({ id: product.id, quantity: quantity + 1 }));
    };

    const handleDecrement = () => {
        if (quantity <= 1) {
            dispatch(removeItem(product.id));
            setQuantity(0);
        } else {
            setQuantity(prev => prev - 1);
            dispatch(updateItemQuantity({ id: product.id, quantity: quantity - 1 }));
        }
    };

    return (
        <div>
            {quantity === 0 ? (
                <button
                    className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                    onClick={handleAddToCart}>Add to Cart</button>
            ) : (
                // <div>
                //     <button onClick={handleDecrement}>-</button>
                //     <span>{quantity}</span>
                //     <button onClick={handleIncrement}>+</button>
                // </div>
                <div className="mt-6 px-6 py-3 flex items-center space-x-2">
                    <button
                        onClick={handleDecrement}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-xl font-bold hover:bg-gray-300">
                        <span className='translate-y-[-1px]' >-</span>
                    </button>
                    <span className="text-lg font-semibold">{quantity}</span>
                    <button
                        onClick={handleIncrement}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-xl font-bold hover:bg-gray-300">
                        +
                    </button>
                </div>
            )}
        </div>
    );
}

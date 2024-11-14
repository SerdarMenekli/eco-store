'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { removeItem, updateItemQuantity } from '@/lib/features/cart/cartSlice';
import Link from 'next/link';

export default function CartPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleIncrement = (id: number, currentQuantity: number) => {
    dispatch(updateItemQuantity({ id, quantity: currentQuantity + 1 }));
  };

  const handleDecrement = (id: number, currentQuantity: number) => {
    if (currentQuantity <= 1) {
      dispatch(removeItem(id));
    } else {
      dispatch(updateItemQuantity({ id, quantity: currentQuantity - 1 }));
    }
  };

  const totalCost = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="p-4 w-4/5 mx-auto my-6">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link href="/products">Browse products</Link>.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b pb-4">
              <div className="flex-grow">
                <h2 className="font-medium text-lg">{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <div className="font-medium text-lg mr-5">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecrement(item.id, item.quantity)}
                  className="w-8 h-8 bg-gray-200 rounded-full font-bold hover:bg-gray-300"
                >
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item.id, item.quantity)}
                  className="w-8 h-8 bg-gray-200 rounded-full font-bold hover:bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="ml-4 text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="mt-6">
          <div className="text-right text-lg font-semibold">
            Total: ${totalCost.toFixed(2)}
          </div>
          <div className="mt-4 text-right">
            <Link href="/checkout" className="bg-green-600 text-white px-4 py-2 rounded">
              Proceed to Checkout
            </Link>
          </div>
        </div>

      )}
    </div>
  );
}

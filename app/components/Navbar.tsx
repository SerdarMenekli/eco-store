"use client";

import { useAppSelector } from '@/lib/hooks';
import Link from 'next/link';
import { useState } from 'react';
import LoginStatus from './LoginStatus';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.items);
  const uniqueItemCount = cartItems.length;

  return (
    <header className="bg-green-700 text-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">Eco-Store</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/products" className="hover:text-green-200">Products</Link>
          <Link href="/about" className="hover:text-green-200">About Us</Link>
          <Link href="/blog" className="hover:text-green-200">Blog</Link>
          <LoginStatus/>
          {/* <Link href="/account/profile" className="hover:text-green-200">Account</Link> */}
          <Link href="/cart" className="hover:text-green-200 flex">
              <span>🛒</span>
              {uniqueItemCount > 0 && (
                <span className="bg-green-800 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center ml-1">
                  {uniqueItemCount}
                </span>
              )}</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-green-700 text-white flex flex-col space-y-4 p-4 md:hidden">
            <Link href="/products" className="hover:text-green-200">Products</Link>
            <Link href="/about" className="hover:text-green-200">About Us</Link>
            <Link href="/blog" className="hover:text-green-200">Blog</Link>
            <Link href="/account/profile" className="hover:text-green-200">Account</Link>
            <Link href="/cart" className="hover:text-green-200">Cart</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

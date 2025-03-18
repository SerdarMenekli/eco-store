"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryFilter() {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleCategorySelect = (categoryId: number | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (categoryId) {
      params.set("category", categoryId.toString());
    } else {
      params.delete("category");
    }

    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Filter by Category</h2>
      <div className="lg:space-y-2 flex flex-wrap gap-2 lg:block">
        <button
          className={`lg:block lg:w-full text-left p-2 rounded-md 
            ${selectedCategory === null ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
          onClick={() => {
            handleCategorySelect(null);
            setSelectedCategory(null);
          }}
        >
          All Categories
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`lg:block lg:w-full text-left p-2 rounded-md ${selectedCategory===category.id ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            onClick={() => {
              handleCategorySelect(category.id);
              setSelectedCategory(category.id);
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

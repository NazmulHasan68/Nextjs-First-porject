'use client'

import Link from "next/link";

export default function Products() {
  const products = [
    { id: '1', name: 'Mobile', price: 5000 },
    { id: '2', name: 'Watch', price: 500 },
    { id: '3', name: 'Camera', price: 1000 }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <Link key={product.id} href={`/products/${product.id}`} className="block">
            <div className="border p-4 rounded shadow hover:scale-105 hover:shadow-lg transition-transform duration-200 cursor-pointer">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="mt-1 text-gray-600">Price: ${product.price.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

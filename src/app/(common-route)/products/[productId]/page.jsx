import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default async function ProductDetailsPage({params}) {
    const {productId} = await params;
    console.log(productId);
    const res = await fetch(`http://localhost:3000/api/products/${productId}`, {cache:'no-store'})
    const product = await res.json();
    console.log(product);
  return (
     <div className="max-w-6xl mx-auto p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Product Image */}
      <div className="flex justify-center items-center">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-500 text-sm">Brand: {product.brand}</p>
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-green-600">৳{product.price}</span>
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-700 font-medium">{product.rating}</span>
              <span className="text-gray-400">({product.reviews} reviews)</span>
            </div>
          </div>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-gray-500 font-medium">Category: {product.category}</p>
          <p className="text-gray-500 font-medium">Stock: {product.stock > 0 ? `${product.stock} available` : "Out of stock"}</p>
        </div>

        
      </div>
    </div>
  )
}

import React from 'react';
import ProductCard from '../ProductCard';

const LatestProducts = async() => {
    const res = await fetch("/api/products/latest",{
        next:{revalidate:30}
    })
    const latestProducts= await res.json();
    return (
        <section id='latest-products' className="w-full mt-10">
      <div className="px-5">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Latest Products
          </h2>
          <p className="mt-4 text-foreground/50 max-w-xl mx-auto">
            Curated new arrivals for the modern enthusiast
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {latestProducts.map((product) =><ProductCard key={product._id} product={product}/>)}
        </div>

      </div>
    </section>
    );
};

export default LatestProducts;
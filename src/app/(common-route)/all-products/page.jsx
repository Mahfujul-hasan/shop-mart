import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import React, { Suspense } from "react";

const allProductsPage = async () => {
  const res = await fetch("/api/products", {
    cache: "no-store",
  });
  const products = await res.json();
  return (
    <div className="px-8 my-10 space-y-5">
      <h3 className="font-semibold text-5xl text-center">
        Browse All Products
      </h3>
      <p className="text-muted-foreground text-center text-lg">
        Discover premium items curated for your lifestyle.
      </p>
      
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
    </div>
  );
};

export default allProductsPage;

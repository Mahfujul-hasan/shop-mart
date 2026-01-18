import { getProducts } from "@/actions/server/products";
import ProductCard from "@/components/ProductCard";


const allProductsPage = async () => {
  const products=await getProducts();
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

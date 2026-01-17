import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Star } from "lucide-react"; // you can use any react icon
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Card className="max-w-97 shadow-lg hover:shadow-xl transition-shadow rounded-md overflow-hidden h-full flex flex-col">
      {/* Product Image */}
      <div className="w-full">
        <Image
          src={product.image}
          alt={product.title}
          width={250}
          height={250}
          className="h-50 rounded-lg mx-auto"
        />
      </div>

      <CardContent className=" flex-1">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <div className="flex items-center justify-between space-x-2">
          <span className="text-lg font-bold">৳{product.price}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">{product.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm line-clamp-3">
          {product.description.slice(0, 50)}{" "}
          <Link href={`/products/${product._id}`} className="text-secondary font-semibold text-lg">see more...</Link>
        </p>
      </CardContent>

     
    </Card>
  );
}

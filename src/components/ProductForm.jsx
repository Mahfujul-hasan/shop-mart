"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

// Shadcn Select
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { postProduct } from "@/actions/server/products";
import Swal from "sweetalert2";

const categories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Grocery",
  "Sports",
  "Books",
  "Toys",
  "Health",
  "Automobile",
];

export default function ProductForm({ session }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // convert number fields
    data.price = Number(data.price);
    data.rating = Number(data.rating);
    data.reviews = Number(data.reviews);
    data.stock = Number(data.stock);
    data.createdAt = new Date();

    const post = await postProduct(data);

    setLoading(false);

    if (post.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/all-products");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to add product!",
        
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Your Name</Label>
          <Input
            name="creatorName"
            defaultValue={session?.user?.name}
            readOnly
            required
          />
        </div>
        <div>
          <Label>Your Image URL</Label>
          <Input
            name="creatorImage"
            type="url"
            defaultValue={session?.user?.image}
            readOnly
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Title</Label>
          <Input name="title" placeholder="Product Name" required />
        </div>
        <div>
          <Label>Image URL</Label>
          <Input name="image" type="url" required />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Price</Label>
          <Input name="price" type="number" required />
        </div>

        <div>
          <Label>Stock</Label>
          <Input name="stock" type="number" required />
        </div>
      </div>

      {/* Category + Brand */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Category</Label>

          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className={"w-full"}>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>

            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Hidden input for form submit */}
          <input type="hidden" name="category" value={category} required />
        </div>

        <div>
          <Label>Brand</Label>
          <Input name="brand" required />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Rating</Label>
          <Input name="rating" type="number" step="0.1" />
        </div>

        <div>
          <Label>Reviews</Label>
          <Input name="reviews" type="number" />
        </div>
      </div>

      <div>
        <Label>Description</Label>
        <Textarea name="description" rows={4} required />
      </div>

      <Button
        type="submit"
        variant="outline"
        disabled={loading}
        className="w-full"
      >
        {loading ? "Adding..." : "Add Product"}
      </Button>
    </form>
  );
}

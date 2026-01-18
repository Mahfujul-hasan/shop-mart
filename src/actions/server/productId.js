"use server";
import { getCollection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProductById = async (id) => {
  if (!id) throw new Error("Product ID required");

  const collection = await getCollection("products"); 
  const product = await collection.findOne({ _id: new ObjectId(id) });

  if (!product) throw new Error("Product not found");

  return { ...product, _id: product._id.toString() };
};

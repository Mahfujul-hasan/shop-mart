import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    const client = await clientPromise;
    const db = await client.db("shop-mart-db");
    const productsCollection = db.collection("products");
    const products = await productsCollection.find().sort({createdAt:-1}).limit(8).toArray()
  return NextResponse.json(products);
}
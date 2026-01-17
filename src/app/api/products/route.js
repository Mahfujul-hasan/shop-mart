import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server";


export async function GET() {
    const client = await clientPromise;
    const db = await client.db("shop-mart-db");
    const productsCollection = db.collection("products");
    const products = await productsCollection.find().toArray()
  return NextResponse.json(products);
}


export async function POST(req) {
  try {
    const product = await req.json();
    const client = await clientPromise;
    const db = client.db("shop-mart-db");

    await db.collection("products").insertOne(product);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add product" },
      { status: 500 }
    );
  }
}
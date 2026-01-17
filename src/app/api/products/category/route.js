import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("shop-mart-db");
    const productsCollection = db.collection("products");

    const categories = await productsCollection
      .aggregate([
        { $group: { _id: "$category" } },   // duplicate remove
        { $project: { _id: 0, category: "$_id" } } // clean format
      ])
      .toArray();

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Categories API error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

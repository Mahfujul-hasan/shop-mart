import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export async function GET(request,{params}) {
    
    const client = await clientPromise;
    const db = await client.db("shop-mart-db");
    const productsCollection = db.collection("products");
    const {id}=await params;
    const product = await productsCollection.findOne({ _id: new ObjectId(id) });

    return NextResponse.json(product);
 
}
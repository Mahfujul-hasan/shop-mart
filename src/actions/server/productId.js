"use server"
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProductById=async(id)=>{
    const productCollection=dbConnect(collections.PRODUCTS)
    const product = await productCollection.findOne({ _id: new ObjectId(id) });
    return product;
}
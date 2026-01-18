"use server"
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const productCollection=dbConnect(collections.PRODUCTS)
export const getProductById=async(id)=>{
    const product = await productCollection.findOne({ _id: new ObjectId(id) });
    return product;
}
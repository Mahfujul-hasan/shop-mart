"use server"
import { getCollection } from "@/lib/dbConnect";


export const getLatestProducts = async()=>{
    const collection = await getCollection("products"); 
    try {
        const products = await collection.find().sort({createdAt:-1}).limit(8).toArray();
    return products;
    } catch (error) {
        console.error("Latest products error:",error);
    }
}
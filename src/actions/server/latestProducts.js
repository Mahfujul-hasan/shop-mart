"use server"
import { collections, dbConnect } from "@/lib/dbConnect";


export const getLatestProducts = async()=>{
    const productCollection = dbConnect(collections.PRODUCTS);
    
    try {
        const products = await productCollection.find().sort({createdAt:-1}).limit(8).toArray();
    return products;
    } catch (error) {
        console.error("Latest products error:",error);
    }
}
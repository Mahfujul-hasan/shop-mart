"use server"

import { getCollection } from "@/lib/dbConnect";
export const getProducts = async () => {
    const collection = await getCollection("products"); 
    const products = await collection.find().toArray();
    return products;
}
export const postProduct = async (product) => {
    const collection = await getCollection("products"); 
    try {
        await collection.insertOne(product);
        return { success: true };
    } catch (error) {
        console.error("addProduct error:", error);
        throw new error("Failed to add product")
    }

}
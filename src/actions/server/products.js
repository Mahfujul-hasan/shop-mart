"use server"

import { collections, dbConnect } from "@/lib/dbConnect";
export const getProducts = async () => {
    const productCollection = dbConnect(collections.PRODUCTS);
    const products = await productCollection.find().toArray();
    return products;
}
export const postProduct = async (product) => {
    try {
        await productCollection.insertOne(product);
        return { success: true };
    } catch (error) {
        console.error("addProduct error:", error);
        throw new error("Failed to add product")
    }

}
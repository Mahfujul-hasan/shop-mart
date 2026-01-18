"use server"
const { dbConnect, collections } = require("@/lib/dbConnect");

const productCollection=dbConnect(collections.PRODUCTS);
export const getProducts=async()=>{
    const products = await productCollection.find().toArray();
    return products;
}

export const postProduct =async(product)=>{
    try {
        await productCollection.insertOne(product);
        return {success:true};
    } catch (error) {
        console.error("addProduct error:",error);
        throw new error("Failed to add product")
    }

}
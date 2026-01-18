"use server"

const { dbConnect, collections } = require("@/lib/dbConnect")

const productCollection= dbConnect(collections.PRODUCTS);

export const getCategories=async()=>{
   try {
     const categories = await productCollection.aggregate([
        { $group: { _id: "$category" } },        
        { $project: { _id: 0, category: "$_id" } } 
      ]).toArray();
      return categories;
    
   } catch (error) {
    console.error("getCategories error:", error);
    throw new Error("Failed to fetch categories")
    
   }

}
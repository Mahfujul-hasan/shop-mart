"use server"

import { collections, dbConnect } from "@/lib/dbConnect";


export const getCategories=async()=>{
   const productCollection= dbConnect(collections.PRODUCTS);
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
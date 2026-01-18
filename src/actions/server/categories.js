"use server"

import { getCollection } from "@/lib/dbConnect";


export const getCategories=async()=>{
   const collection = await getCollection("products"); 

   try {
     const categories = await collection.aggregate([
        { $group: { _id: "$category" } },        
        { $project: { _id: 0, category: "$_id" } } 
      ]).toArray();
      return categories;
    
   } catch (error) {
    console.error("getCategories error:", error);
    throw new Error("Failed to fetch categories")
    
   }

}
const { dbConnect, collections } = require("@/lib/dbConnect")

const productCollection = dbConnect(collections.PRODUCTS);
export const getLatestProducts = async()=>{
    
    try {
        const products = await productCollection.find().sort({createdAt:-1}).limit(8).toArray();
    return products;
    } catch (error) {
        console.error("Latest products error:",error);
    }
}
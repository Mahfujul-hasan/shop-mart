import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbname = process.env.DB_NAME;

if (!uri) throw new Error("MONGODB_URI is missing!");
if (!dbname) throw new Error("DB_NAME is missing!");

let client;

export const getCollection = async (collectionName) => {
  if (!client) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect(); // connect once
  }
  return client.db(dbname).collection(collectionName);
};

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vqc4z0k.mongodb.net/?appName=Cluster0`;

let clientPromise;
if(!global._mongoClientPromise){

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;
export default clientPromise;
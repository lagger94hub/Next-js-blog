// or as an es module:
import { MongoClient } from "mongodb";
import connData from "./connection-data";


const dbConnector = async (task, op) => {
  try {
    const client = new MongoClient(connData.uri);
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(connData.dbName);
    const collection = db.collection(op.collection);
    let result 
    switch (task) {
      case "add": {  
        result = await collection.insertMany(op.documentsArray);
      }
      case "get": {
        result = await collection.find(op.filter).toArray()
      }
      default: break
    }
    await client.close()
    return result

  } catch (e) {
    throw e
  }
};
export default dbConnector;

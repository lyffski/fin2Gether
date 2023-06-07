import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';

let cachedClient = undefined;

export async function connectToDatabase() {
  /* if (cachedClient && cachedClient.isConnected()) {
    return cachedClient;
  } */

  const client = new MongoClient(uri);

  try {
    await client.connect();
    cachedClient = client;
    console.error('Success connecting to the database:', client);
    return client;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

export default connectToDatabase;
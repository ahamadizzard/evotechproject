import { MongoClient } from "mongodb";

const clientPromise = () => {
  const MONGODB_URI = process.env.DATABASE_URI;
  const options = {};

  if (!MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "DATABASE_URI"');
  }

  const client = new MongoClient(MONGODB_URI, options);
  return client.connect();
};

export default clientPromise;

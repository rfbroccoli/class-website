import { MongoClient } from "mongodb";

// @ts-ignore
const client = new MongoClient(import.meta.env.VITE_MONGODB_URL)
export const clientPromise = client.connect()


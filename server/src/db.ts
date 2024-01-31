import { MongoClient } from 'mongodb';

const MONGO_URI = 'mongodb://localhost:27017/data-storage';

export const client = new MongoClient(MONGO_URI);
// TODO: add try/catch
export const db = client.db();

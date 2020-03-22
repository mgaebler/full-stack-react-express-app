import { MongoClient, Db } from 'mongodb';

const url = 'mongodb://localhost:27019/myorganizer';
const options = { useNewUrlParser: true };
let db: Db | null = null;

export async function connectDB() {
  if (db) return db;
  let client = await MongoClient.connect(url, options);
  db = client.db();
  //   console.info('Got DB, ', db);
  return db;
}

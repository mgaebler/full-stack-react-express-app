import { defaultState } from './defaultState';
import { connectDB } from './connect-db';

async function initializeDb() {
  let db = await connectDB();
  let user = await db.collection('users').findOne({ id: 'U1' });

  if (!user) {
    for (let collectionName in defaultState) {
      let collection = db.collection(collectionName);
      //@ts-ignore
      await collection.insertMany(defaultState[collectionName]);
      // process.exit();
    }
  }
}

initializeDb();

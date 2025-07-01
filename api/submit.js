import { MongoClient } from 'mongodb';

let cachedClient;

export default async function handler(req, res) {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME || 'myDb';

  if (!uri) {
    return res.status(500).json({ error: 'MONGODB_URI env var missing' });
  }

  if (!cachedClient) {
    cachedClient = new MongoClient(uri);
    await cachedClient.connect();
  }

  const db = cachedClient.db(dbName);
  const collection = db.collection('submissions');

  if (req.method === 'POST') {
    const body = await req.json();
    await collection.insertOne(body);
    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

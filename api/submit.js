import { MongoClient } from 'mongodb';

let cachedClient;

export default async function handler(req, res) {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME || 'manomay';

  if (!uri) {
    return res.status(500).json({ error: 'MONGODB_URI env var missing' });
  }

  try {
    if (!cachedClient) {
      cachedClient = new MongoClient(uri, { maxPoolSize: 10 });
      await cachedClient.connect();
    }

    const db = cachedClient.db(dbName);
    const collection = db.collection('submissions');

    switch (req.method) {
      case 'POST': {
        const body = req.body ?? await parseJson(req);
        await collection.insertOne(body);
        return res.status(201).json({ ok: true });
      }
      case 'GET': {
        const docs = await collection.find().limit(20).toArray();
        return res.status(200).json(docs);
      }
      default:
        res.setHeader('Allow', 'GET, POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error', details: err.message });
  }
}

// Fallback JSON parser for environments where req.body isn't pre-parsed
async function parseJson(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => (data += chunk));
    req.on('end', () => {
      try {
        resolve(JSON.parse(data || '{}'));
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

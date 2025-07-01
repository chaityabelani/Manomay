const { MongoClient } = require('mongodb');

let cachedClient = null;

module.exports = async (req, res) => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    res.status(500).json({ error: 'Missing MONGODB_URI environment variable' });
    return;
  }

  try {
    if (!cachedClient) {
      cachedClient = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await cachedClient.connect();
    }

    const dbName = process.env.MONGODB_DB || 'mydatabase';
    const db = cachedClient.db(dbName);

    if (req.method === 'GET') {
      const docs = await db.collection('submissions').find({}).toArray();
      res.status(200).json(docs);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

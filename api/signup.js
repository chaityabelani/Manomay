const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

let cachedClient = null;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    res.status(500).json({ error: 'Missing MONGODB_URI' });
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

    const { name, email, password } = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!name || !email || !password) {
      res.status(400).json({ error: 'Missing fields' });
      return;
    }

    const db = cachedClient.db(process.env.MONGODB_DB || 'mydatabase');
    const usersCol = db.collection('users');

    const existing = await usersCol.findOne({ email });
    if (existing) {
      res.status(409).json({ error: 'User already exists' });
      return;
    }

    const hash = await bcrypt.hash(password, 10);
    const result = await usersCol.insertOne({ name, email, hash, createdAt: new Date() });
    res.status(201).json({ insertedId: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

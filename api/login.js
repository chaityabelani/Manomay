const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

let cachedClient = null;
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

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

    const { email, password } = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!email || !password) {
      res.status(400).json({ error: 'Missing email or password' });
      return;
    }

    const db = cachedClient.db(process.env.MONGODB_DB || 'mydatabase');
    const user = await db.collection('users').findOne({ email });
    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const ok = await bcrypt.compare(password, user.hash);
    if (!ok) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }
    // create simple JWT (optional)
    const token = jwt.sign({ sub: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

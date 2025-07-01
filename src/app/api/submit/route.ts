import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

let cachedClient: MongoClient | null = null;

export async function POST(request: Request) {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return NextResponse.json({ error: 'Missing MONGODB_URI environment variable' }, { status: 500 });
  }

  try {
    if (!cachedClient) {
      cachedClient = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as any);
      await cachedClient.connect();
    }

    const dbName = process.env.MONGODB_DB || 'test';
    const db = cachedClient.db(dbName);

    const data = await request.json();
    const result = await db.collection('submissions').insertOne(data);
    
    return NextResponse.json({ insertedId: result.insertedId });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 
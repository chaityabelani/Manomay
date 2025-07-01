import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

let cachedClient: MongoClient | null = null;

interface SignupRequest {
  email: string;
  password: string;
  name: string;
}

export async function POST(request: Request) {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return NextResponse.json({ error: 'Missing MONGODB_URI' }, { status: 500 });
  }

  try {
    if (!cachedClient) {
      cachedClient = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as any);
      await cachedClient.connect();
    }

    const { email, password, name }: SignupRequest = await request.json();
    
    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const db = cachedClient.db(process.env.MONGODB_DB || 'mydatabase');
    
    // Check if user already exists
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 400 });
    }

    // Hash password
    const hash = await bcrypt.hash(password, 10);

    // Create user
    const result = await db.collection('users').insertOne({
      email,
      name,
      hash,
      createdAt: new Date(),
    });

    return NextResponse.json({ 
      message: 'User created successfully',
      userId: result.insertedId 
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 
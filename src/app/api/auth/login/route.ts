import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { username, password, userType } = await request.json();

    // Demo credentials
    const demoUsers = {
      customer: { username: 'customer', password: 'password', redirectUrl: '/customer/dashboard' },
      restaurant: { username: 'restaurant', password: 'password', redirectUrl: '/restaurant/dashboard' },
    };

    const user = demoUsers[userType as keyof typeof demoUsers];

    if (user && user.username === username && user.password === password) {
      // In a real app, you'd create a session/JWT here
      return NextResponse.json({ redirectUrl: user.redirectUrl });
    } else {
      return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}

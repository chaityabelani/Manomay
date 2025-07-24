import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to Manomay Food</h1>
        <div className="space-x-4">
          <Link href="/customer/login" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Customer Login
          </Link>
          <Link href="/restaurant/login" className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
            Restaurant Login
          </Link>
        </div>
      </div>
    </main>
  );
}

import Link from 'next/link';
import { restaurants } from '../lib/data';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Food Park!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurants.map((restaurant) => (
            <Link href={`/restaurant/${restaurant.id}`} key={restaurant.id}>
              <div className="block border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold">{restaurant.name}</h2>
                <p>{restaurant.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
} 
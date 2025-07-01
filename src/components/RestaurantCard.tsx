import Link from 'next/link';

interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceForTwo: string;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link href={`/restaurant/${restaurant.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-sm font-medium">
            {restaurant.deliveryTime}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{restaurant.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium bg-green-100 text-green-700 px-2 py-1 rounded">
                ★ {restaurant.rating}
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              {restaurant.priceForTwo} for two
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
} 
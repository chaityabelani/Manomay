'use client';

import Navbar from '@/components/Navbar';
import FoodCategory from '@/components/FoodCategory';
import RestaurantCard from '@/components/RestaurantCard';

// Sample data - Replace with actual API calls
const categories = [
  { name: 'Pizza', image: 'https://source.unsplash.com/500x500/?pizza' },
  { name: 'Burger', image: 'https://source.unsplash.com/500x500/?burger' },
  { name: 'Sushi', image: 'https://source.unsplash.com/500x500/?sushi' },
  { name: 'Indian', image: 'https://source.unsplash.com/500x500/?indian-food' },
  { name: 'Chinese', image: 'https://source.unsplash.com/500x500/?chinese-food' },
  { name: 'Dessert', image: 'https://source.unsplash.com/500x500/?dessert' },
];

const restaurants = [
  {
    id: '1',
    name: 'Pizza Paradise',
    image: 'https://source.unsplash.com/800x600/?restaurant,pizza',
    cuisine: 'Italian, Pizza',
    rating: 4.5,
    deliveryTime: '30-40 min',
    priceForTwo: '₹500',
  },
  {
    id: '2',
    name: 'Burger Boulevard',
    image: 'https://source.unsplash.com/800x600/?restaurant,burger',
    cuisine: 'American, Fast Food',
    rating: 4.3,
    deliveryTime: '25-35 min',
    priceForTwo: '₹400',
  },
  {
    id: '3',
    name: 'Spice Garden',
    image: 'https://source.unsplash.com/800x600/?restaurant,indian',
    cuisine: 'Indian, North Indian',
    rating: 4.4,
    deliveryTime: '35-45 min',
    priceForTwo: '₹600',
  },
  {
    id: '4',
    name: 'Sushi House',
    image: 'https://source.unsplash.com/800x600/?restaurant,sushi',
    cuisine: 'Japanese, Sushi',
    rating: 4.6,
    deliveryTime: '40-50 min',
    priceForTwo: '₹800',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Hero Section */}
        <div className="py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hungry? We've got you covered
          </h1>
          <p className="text-xl text-gray-600">
            Order food from the best restaurants in your city
          </p>
        </div>

        {/* Food Categories */}
        <FoodCategory categories={categories} />

        {/* Restaurant List */}
        <div className="py-8">
          <h2 className="text-2xl font-bold mb-6">Popular Restaurants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
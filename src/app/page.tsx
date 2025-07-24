'use client';

// import Navbar from '@/components/Navbar';
import FoodCategory from '@/components/FoodCategory';
import RestaurantCard from '@/components/RestaurantCard';

// Sample data - Replace with actual API calls
const categories = [
  { name: 'Pizza', image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8fDA%3D' },
  { name: 'Burger', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Sushi', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VzaGl8ZW58MHx8MHx8fDA%3D' },
  { name: 'Indian', image: 'https://images.unsplash.com/photo-1589647363585-f4a7d38779df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
  { name: 'Chinese', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
  { name: 'Dessert', image: 'https://images.unsplash.com/photo-1551024601-bec7828449ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc3NlcnR8ZW58MHx8MHx8fDA%3D' },
];

const restaurants = [
  {
    id: '1',
    name: 'Pizza Paradise',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjByZXN0YXVyYW50fGVufDB8fDB8fHww',
    cuisine: 'Italian, Pizza',
    rating: 4.5,
    deliveryTime: '30-40 min',
    priceForTwo: '₹500',
  },
  {
    id: '2',
    name: 'Burger Boulevard',
    image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1cmdlciUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
    cuisine: 'American, Fast Food',
    rating: 4.3,
    deliveryTime: '25-35 min',
    priceForTwo: '₹400',
  },
  {
    id: '3',
    name: 'Spice Garden',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    cuisine: 'Indian, North Indian',
    rating: 4.4,
    deliveryTime: '35-45 min',
    priceForTwo: '₹600',
  },
  {
    id: '4',
    name: 'Sushi House',
    image: 'https://images.unsplash.com/photo-1611141654212-3abb0e18345a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VzaGklMjByZXN0YXVyYW50fGVufDB8fDB8fHww',
    cuisine: 'Japanese, Sushi',
    rating: 4.6,
    deliveryTime: '40-50 min',
    priceForTwo: '₹800',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Hero Section */}
        <div className="py-8">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">
            Hungry? We've got you covered
          </h1>
          <p className="text-xl text-gray-300">
            Order food from the best restaurants in your city
          </p>
        </div>

        {/* Food Categories */}
        <FoodCategory categories={categories} />

        {/* Restaurant List */}
        <div className="py-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Popular Restaurants</h2>
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
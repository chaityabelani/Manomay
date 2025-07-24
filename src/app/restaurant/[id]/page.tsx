'use client';

import { useState } from 'react';
// import Navbar from '@/components/Navbar';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
}

interface CartItem extends MenuItem {
  quantity: number;
}

// Sample menu data - Replace with actual API call
const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Classic tomato sauce, mozzarella, and basil',
    price: 299,
    image: 'https://source.unsplash.com/500x500/?pizza,margherita',
    category: 'Pizza',
    isVeg: true,
  },
  {
    id: '2',
    name: 'Pepperoni Pizza',
    description: 'Tomato sauce, mozzarella, and pepperoni',
    price: 399,
    image: 'https://source.unsplash.com/500x500/?pizza,pepperoni',
    category: 'Pizza',
    isVeg: false,
  },
  {
    id: '3',
    name: 'Garlic Bread',
    description: 'Freshly baked bread with garlic butter and herbs',
    price: 149,
    image: 'https://source.unsplash.com/500x500/?garlic-bread',
    category: 'Sides',
    isVeg: true,
  },
  {
    id: '4',
    name: 'Chocolate Brownie',
    description: 'Warm chocolate brownie with vanilla ice cream',
    price: 199,
    image: 'https://source.unsplash.com/500x500/?brownie,dessert',
    category: 'Desserts',
    isVeg: true,
  },
];

export default function RestaurantPage({ params }: { params: { id: string } }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...currentCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === itemId);
      if (existingItem?.quantity === 1) {
        return currentCart.filter((item) => item.id !== itemId);
      }
      return currentCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navbar /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Restaurant Info */}
        <div className="py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pizza Paradise
          </h1>
          <p className="text-xl text-gray-600 mb-2">Italian, Pizza</p>
          <div className="flex items-center space-x-4">
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
              ★ 4.5
            </span>
            <span className="text-gray-600">30-40 min</span>
            <span className="text-gray-600">₹500 for two</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Menu Section */}
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-6">Menu</h2>
            <div className="grid gap-6">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow-md flex gap-4"
                >
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 rounded-full ${
                        item.isVeg ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold">₹{item.price}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-primary text-white px-4 py-1 rounded-full text-sm hover:bg-primary/90"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          {cart.length > 0 && (
            <div className="lg:w-96">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h2 className="text-xl font-bold mb-4">Your Cart</h2>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-600">₹{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-primary"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="text-primary"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>₹{getTotalAmount()}</span>
                    </div>
                    <button className="w-full bg-primary text-white py-2 rounded-lg mt-4 hover:bg-primary/90">
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">Manomay</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search for restaurants or dishes..."
              className="px-4 py-2 w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Link href="/orders" className="text-gray-700 hover:text-primary">
              Orders
            </Link>
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-primary"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <input
              type="text"
              placeholder="Search for restaurants or dishes..."
              className="px-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 mb-2"
            />
            <Link
              href="/orders"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Orders
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 
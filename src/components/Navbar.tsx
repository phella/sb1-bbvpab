import React from 'react';
import { Car } from 'lucide-react';
import './Hero.css';

export default function Navbar() {
  const scrollToCTA = () => {
    document
      .getElementById('join-waitlist')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Car className="h-8 w-8 text-amber-600" />
        <span className="text-2xl font-bold text-gray-800">Dayry</span>
      </div>
      <button
        onClick={scrollToCTA}
        className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors"
      >
        Join Waitlist
      </button>
    </nav>
  );
}

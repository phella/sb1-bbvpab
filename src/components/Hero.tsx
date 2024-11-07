import React from 'react';
import { ChevronRight, Shield } from 'lucide-react';

export default function Hero() {
  const scrollToCTA = () => {
    document
      .getElementById('join-waitlist')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Your Daily Commute Made Simple
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with trusted drivers and passengers for safe, affordable rides
          across Egypt.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={scrollToCTA}
            className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors flex items-center"
          >
            Get Started <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000"
          alt="Carpooling"
          className="rounded-2xl shadow-2xl"
        />
        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-green-500" />
            <span className="text-sm font-medium">Verified Drivers</span>
          </div>
        </div>
      </div>
    </header>
  );
}

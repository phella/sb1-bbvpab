import React from 'react';
import { Car, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Car className="h-6 w-6 text-amber-600" />
            <span className="text-xl font-bold">Dayry</span>
          </div>
          <p className="text-gray-400 text-center md:text-left mb-6 md:mb-0">
            Making transportation in Egypt more accessible, affordable, and sustainable.
          </p>
          <div className="flex space-x-4">
            <a href="#facebook" className="hover:text-amber-600">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#twitter" className="hover:text-amber-600">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#instagram" className="hover:text-amber-600">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dayry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
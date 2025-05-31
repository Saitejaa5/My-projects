import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 text-white p-2 rounded-lg">
            <Heart size={24} />
          </div>
          <h1 className="text-xl font-bold text-gray-900">HealthGuide AI</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">About</a>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Services</a>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">FAQs</a>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</a>
        </nav>
        
        <button className="md:hidden text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
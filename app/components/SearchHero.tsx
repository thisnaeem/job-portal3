'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SearchHeroProps {
  onSearch: (query: string, location: string) => void;
}

export default function SearchHero({ onSearch }: SearchHeroProps) {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch(query, location);
  };

  return (
    <div className="bg-gradient-to-r items-center justify-center from-blue-600 to-blue-800 text-white py-20 px-4">
      <div className="max-w-6xl items-center mx-auto">
        <h1 className="text-5xl text-center font-bold mb-8">Find Your Dream Job Here ✨</h1>
        <p className="text-xl mb-8 text-center text-blue-100">
          Discover opportunities that match your experience and goals
        </p>
        <div className="flex gap-4 bg-white rounded-full p-2 shadow-lg">
          <div className="flex-1 flex items-center gap-2 px-4">
            <Image src="/search.svg" alt="Search" width={20} height={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Job title or keyword"
              className="w-full outline-none text-gray-800 py-3"
            />
          </div>
          <div className="flex-1 flex items-center gap-2 px-4 border-l">
            <Image src="/map.svg" alt="Location" width={20} height={20} />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Add country or city"
              className="w-full outline-none text-gray-800 py-3"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-12 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
} 
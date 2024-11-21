'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getTagColor } from '../utils/colors';
import Link from 'next/link';

interface JobCardProps {
  id: number;
  company: string;
  position: string;
  logo: string;
  applicants: number;
  tags: string[];
  description: string;
  salary: number;
  postedDays: number;
}

export default function JobCard({
  id,
  company,
  position,
  logo,
  applicants,
  tags,
  description,
  salary,
  postedDays
}: JobCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link href={`/jobs/${id}`} className="block">
      <div className="bg-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
        <div className="flex justify-between items-start">
          <div className="flex gap-4">
            <Image src={logo} alt={company} width={40} height={40} className="rounded" />
            <div>
              <h3 className="font-semibold text-lg">{position}</h3>
              <p className="text-gray-600">{company} • {applicants} Applicants</p>
            </div>
          </div>
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="text-gray-400 hover:text-red-500"
          >
            <Image 
              src={isFavorite ? "/heart-filled.svg" : "/heart.svg"} 
              alt="Favorite" 
              width={24} 
              height={24}
            />
          </button>
        </div>

        <div className="flex gap-2 mt-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 rounded-full text-sm"
              style={{
                backgroundColor: getTagColor(tag).bg,
                color: getTagColor(tag).text
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 text-gray-600 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center mt-4 pt-4 border-t">
          <span className="font-semibold">${salary}/hr</span>
          <span className="text-gray-500">Posted {postedDays} days ago</span>
        </div>
      </div>
    </Link>
  );
} 
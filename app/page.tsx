'use client';

import { useState, useEffect } from 'react';
import JobCard from "./components/JobCard";
import Navbar from "./components/Navbar";
import SearchHero from "./components/SearchHero";
import Sidebar from "./components/Sidebar";
import { dummyJobs } from './data/jobs';

interface FilterOptions {
  jobType: string[];
  category: string;
  salaryRange: [number, number];
}

interface Job {
  id: number;
  company: string;
  position: string;
  logo: string;
  applicants: number;
  tags: string[];
  description: string;
  salary: number;
  postedDays: number;
  location: string;
  category: string;
}

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = (query: string, location: string) => {
    setSearchQuery(query);
    setSearchLocation(location);
    applyFilters();
  };

  const handleFilterChange = (filters: FilterOptions) => {
    applyFilters(filters);
  };

  const applyFilters = (filters?: FilterOptions) => {
    let filtered = [...jobs];

    // Apply search filters
    if (searchQuery) {
      filtered = filtered.filter(job => 
        job.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (searchLocation) {
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    // Apply sidebar filters
    if (filters) {
      if (filters.jobType.length > 0) {
        filtered = filtered.filter(job =>
          job.tags.some(tag => filters.jobType.includes(tag))
        );
      }

      if (filters.category !== 'All') {
        filtered = filtered.filter(job => job.category === filters.category);
      }

      filtered = filtered.filter(job =>
        job.salary >= filters.salaryRange[0] && job.salary <= filters.salaryRange[1]
      );
    }

    setFilteredJobs(filtered);
  };

  useEffect(() => {
    setJobs(dummyJobs);
    setFilteredJobs(dummyJobs);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SearchHero onSearch={handleSearch} />
      
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex gap-8">
          <Sidebar onFilterChange={handleFilterChange} />
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

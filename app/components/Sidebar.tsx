

'use client';

import { useState } from 'react';
import { Range } from 'react-range';

interface SidebarProps {
  onFilterChange: (filters: FilterOptions) => void;
}

interface FilterOptions {
  jobType: string[];
  category: string;
  salaryRange: [number, number];
}

const categories = ['All', 'Design', 'Development', 'Marketing', 'Sales'];
const jobTypes = ['Full-Time', 'Part-Time', 'Internship', 'Remote'];

export default function Sidebar({ onFilterChange }: SidebarProps) {
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [salaryRange, setSalaryRange] = useState<[number, number]>([0, 500]);

  const handleJobTypeChange = (type: string) => {
    const updatedTypes = selectedJobTypes.includes(type)
      ? selectedJobTypes.filter(t => t !== type)
      : [...selectedJobTypes, type];
    setSelectedJobTypes(updatedTypes);
    updateFilters(updatedTypes, selectedCategory, salaryRange);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    updateFilters(selectedJobTypes, category, salaryRange);
  };

  const updateFilters = (types: string[], category: string, range: [number, number]) => {
    onFilterChange({
      jobType: types,
      category,
      salaryRange: range
    });
  };

  return (
    <div className="w-72 p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-8">
        <h3 className="font-semibold mb-4">Job Type</h3>
        <div className="space-y-3">
          {jobTypes.map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedJobTypes.includes(type)}
                onChange={() => handleJobTypeChange(type)}
                className="rounded text-blue-500"
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-4">Salary Range</h3>
        <div className="px-2">
          <Range
            values={salaryRange}
            step={10}
            min={0}
            max={500}
            onChange={(values) => {
              setSalaryRange(values as [number, number]);
              updateFilters(selectedJobTypes, selectedCategory, values as [number, number]);
            }}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="h-1 w-full bg-gray-200 rounded-full"
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="h-4 w-4 bg-blue-500 rounded-full"
              />
            )}
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>${salaryRange[0]}/hr</span>
            <span>${salaryRange[1]}/hr</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-4">Job Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input
                type="radio"
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
                className="text-blue-500"
                name="category"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getTagColor } from "@/app/utils/colors";
import { useParams } from "react-router-dom";
import { dummyJobs } from "@/app/data/jobs";



interface Job {
  id: number;
  company: string;
  position: string;
  logo: string;
  tags: string[];
  salary: number;
  location: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export default function JobDetails() {
  const [job, setJob] = useState<Job | null>(null);
  const [similarJobs, setSimilarJobs] = useState<Job[]>([]);
  const params = useParams();

  useEffect(() => {
    const currentJob = dummyJobs.find(j => j.id === parseInt(params.id as string));
    if (currentJob) {
      setJob(currentJob);
      setSimilarJobs(dummyJobs.filter(j => j.id !== currentJob.id && j.category === currentJob.category));
    }
  }, [params.id]);

  if (!job) return null;

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Scrollable Sidebar with Similar Jobs */}
          <div className="w-1/3 space-y-4 h-[calc(100vh-8rem)] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Similar Jobs</h2>
            {similarJobs.map((job) => (
              <SimilarJobCard key={job.id} company={job.company} position={job.position} logo={job.logo} tags={job.tags} salary={job.salary} location={job.location} />
            ))}
          </div>

          {/* Fixed Job Details */}
          <div className="w-2/3 bg-white rounded-lg p-8 shadow-sm sticky top-24">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
                <div>
                  <h1 className="text-2xl font-bold">{job.position}</h1>
                  <p className="text-gray-600">
                    {job.company} • {job.location}
                  </p>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>

            <div className="flex gap-3 mb-6">
              {job.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-sm"
                  style={{
                    backgroundColor: getTagColor(tag).bg,
                    color: getTagColor(tag).text,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mb-4">About the role</h2>
              <p className="text-gray-600 mb-6">{job.description}</p>

              <h2 className="text-xl font-semibold mb-4">Requirements</h2>
              <ul className="list-disc pl-5 mb-6 text-gray-600">
                {job.requirements.map((req: string) => (
                  <li key={req}>{req}</li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
              <ul className="list-disc pl-5 mb-6 text-gray-600">
                {job.responsibilities.map((resp: string) => (
                  <li key={resp}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SimilarJobCard({ company, position, logo, tags, salary, location }: SimilarJobCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-3">
        <Image
          src={logo}
          alt={company}
          width={40}
          height={40}
          className="rounded"
        />
        <div>
          <h3 className="font-semibold">{position}</h3>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        {tags.slice(0, 2).map((tag: string) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-full text-xs"
            style={{
              backgroundColor: getTagColor(tag).bg,
              color: getTagColor(tag).text,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
        <span>${salary}/hr</span>
        <span>{location}</span>
      </div>
    </div>
  );
}

// Define the props interface
interface SimilarJobCardProps {
  company: string;
  position: string;
  logo: string;
  tags: string[];
  salary: number;
  location: string;
}

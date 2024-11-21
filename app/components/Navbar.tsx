"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={70}
                height={40}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/jobs"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Find Jobs
            </Link>
            <Link
              href="/talent"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Find Talent
            </Link>
            <Link
              href="/upload"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Upload Job
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              About us
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative hover:opacity-80 transition-opacity">
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
              <Image
                src="/bell.svg"
                alt="Notifications"
                width={24}
                height={24}
              />
            </button>
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 border-l pl-6"
              >
                <span className="text-gray-700 font-medium">
                  Fintan Cabrera
                </span>
                <Image
                  src="/dummy-avatar.jpg"
                  alt="Profile"
                  width={36}
                  height={36}
                  className="rounded-full ring-2 ring-offset-2 ring-gray-200 hover:ring-blue-400 transition-all"
                />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <Link
                    href="/applications"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    My Applications
                  </Link>
                  <div className="border-t my-1"></div>
                  <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

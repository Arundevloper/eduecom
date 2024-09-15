"use client";

import React from "react";
import Link from "next/link";

const Menu: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Category 1 */}
      <div className="relative group">
  <button className="w-full text-left font-semibold py-2 px-4 rounded hover:bg-gray-200">
    Construction Toys
  </button>
  <div
    className="absolute left-0 top-full hidden group-hover:block shadow-lg rounded-lg mt-2 z-10"
    style={{ backgroundColor: '#ffffff' }} // Ensures solid white background
  >
    <ul className="py-2">
      <li>
        <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
          Option 1
        </Link>
      </li>
      <li>
        <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
          Option 2
        </Link>
      </li>
      <li>
        <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
          Option 3
        </Link>
      </li>
    </ul>
  </div>
</div>

      <div className="relative group">
        <button className="w-full text-left font-semibold py-2 px-4 rounded hover:bg-gray-200">
          Construction Toys
        </button>
        <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 z-10">
          <ul className="py-2">
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Option 1
              </Link>
            </li>
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Option 2
              </Link>
            </li>
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Option 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative group">
        <button className="w-full text-left font-semibold py-2 px-4 rounded hover:bg-gray-200">
          Construction Toys
        </button>
        <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 z-10">
          <ul className="py-2">
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Option 1
              </Link>
            </li>
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Option 2
              </Link>
            </li>
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Option 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative group">
        <button className="w-full text-left font-semibold py-2 px-4 rounded hover:bg-gray-200">
          Construction Toys
        </button>
        <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 z-10">
          <ul className="py-2">
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Option 1
              </Link>
            </li>
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Option 2
              </Link>
            </li>
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Option 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative group">
        <button className="w-full text-left font-semibold py-2 px-4 rounded hover:bg-gray-200">
          Construction Toys
        </button>
        <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 z-10">
          <ul className="py-2">
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Option 1
              </Link>
            </li>
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Option 2
              </Link>
            </li>
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Option 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative group">
        <button className="w-full text-left font-semibold py-2 px-4 rounded hover:bg-gray-200">
          Construction Toys
        </button>
        <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 z-10">
          <ul className="py-2">
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Option 1
              </Link>
            </li>
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Option 2
              </Link>
            </li>
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Option 3
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Repeat for other categories */}

      {/* Login and Register Buttons */}
      <div className="mt-auto flex flex-col space-y-4">
        <Link
          href="/login"
          className="w-full text-center py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="w-full text-center py-2 px-4 rounded bg-green-500 text-white hover:bg-green-600"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Menu;

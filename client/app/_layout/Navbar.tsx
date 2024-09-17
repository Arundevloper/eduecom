"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Menu from "../_components/Menu";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const preventScroll = () => {
      document.body.style.overflow = isMenuOpen ? "hidden" : "";
      document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
    };

    preventScroll();

    return () => {
      document.body.style.overflow = ""; // Reset overflow on cleanup
      document.documentElement.style.overflow = ""; // Reset overflow on cleanup
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 bg-gray-50 shadow-md transition-transform  bg-gray-100 duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ zIndex: 50 }} // Set lower z-index for Navbar
      >
        <div className="container mx-auto p-5 flex items-center justify-between">
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl sm:ml-1">Tailblocks</span>
          </Link>

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <div className="hidden md:flex">
              {/* First Link with Dropdown */}
              <div className="relative group">
                <Link href="/" className="mr-5 hover:text-gray-900">
                  Construction Toys
                </Link>
                {/* Dropdown menu */}
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg  z-50">
                  <ul className="py-2">
                    <li className="w-48">
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 1
                      </Link>
                    </li>
                    <li className="w-48">
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 2
                      </Link>
                    </li>
                    <li className="w-48">
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 3
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Second Link with Dropdown */}
              <div className="relative group">
                <Link href="/" className="mr-5 hover:text-gray-900">
                  Science & Activity Kits
                </Link>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg z-50 ">
                  <ul className="py-2">
                    <li className="w-48">
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 1
                      </Link>
                    </li>
                    <li className="w-48">
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 2
                      </Link>
                    </li>
                    <li className="w-48">
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 3
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Third Link with Dropdown */}
              <div className="relative group">
                <Link href="/" className="mr-5 hover:text-gray-900">
                  Shop By Age
                </Link>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg z-50">
                  <ul className="py-2">
                    <li className="w-48">
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 1
                      </Link>
                    </li>
                    <li className="w-48">
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 2
                      </Link>
                    </li>
                    <li className="w-48">
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 3
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Fourth Link with Dropdown */}
              <div className="relative group">
                <Link href="/" className="mr-5 hover:text-gray-900">
                  Gifting
                </Link>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg z-50 ">
                  <ul className="py-2">
                    <li className="w-48">
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 1
                      </Link>
                    </li>
                    <li className="w-48">
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 2
                      </Link>
                    </li>
                    <li className="w-48">
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 3
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative group">
                <Link href="/" className="mr-5 hover:text-gray-900">
                  More
                </Link>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg  z-50">
                  <ul className="py-2">
                    <li className="w-48">
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 1
                      </Link>
                    </li>
                    <li className="w-48">
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 2
                      </Link>
                    </li>
                    <li className="w-48">
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 3
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          {/* Account and Heart icons */}
          <div className="flex space-x-4">
            <span className="block">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
              </svg>
            </span>
            <span className="block">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </span>
          </div>

          {/* Button */}
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
        </div>
      </header>
      <div
        ref={menuRef} // Add ref here
        className={`fixed top-0 left-0 bg-white  w-[90%] h-full shadow-lg z-100 rounded-r-lg p-4 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 100 }} // Set higher z-index for Menu
      >
        {isMenuOpen && <Menu />}
      </div>
    </>
  );
};

export default Navbar;

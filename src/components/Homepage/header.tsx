"use client"
import React, { useState } from 'react';
import { FaHeart, FaBell, FaSearch, FaCog, FaBars } from 'react-icons/fa';
import { VscSettings } from "react-icons/vsc";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white py-4 px-4 md:px-8 shadow-md flex items-center justify-between flex-wrap">
      {/* Logo and Search Bar Container */}
      <div className="flex items-center space-x-4 lg:space-x-20 w-full lg:w-auto">
        {/* Logo */}
        <Link href="/">
          <button className="text-xl md:text-2xl font-bold text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md transition">
            MORENT
          </button>
        </Link>
        {/* Search Bar */}
        <div className="relative w-full lg:w-[492px] h-[44px] mt-2 lg:mt-0">
          <input
            type="text"
            placeholder="Search something here"
            className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ borderRadius: '70px' }}
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FaSearch />
          </div>
          <div className="absolute text-2xl right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <VscSettings />
          </div>
        </div>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl text-gray-600">
          <FaBars />
        </button>
      </div>

      {/* Icons for Large Screens */}
      <div className="hidden lg:flex items-center space-x-2 lg:space-x-4 mt-2 lg:mt-0">
        <Link href="/favorites">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FaHeart className="text-lg md:text-xl text-gray-600 cursor-pointer" />
          </div>
        </Link>
        <Link href="/notifications">
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FaBell className="text-lg md:text-xl text-gray-600 cursor-pointer" />
            <span className="absolute top-1 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
        </Link>
        <Link href="/settings">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FaCog className="text-lg md:text-xl text-gray-600 cursor-pointer" />
          </div>
        </Link>

        {/* Profile Picture */}
        <Link href="/profile">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
            <Image src="/profill.png" alt="Profile" width={40} height={40} />
          </div>
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white w-4/5 h-full p-4 space-y-4">
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="text-3xl text-gray-600">
                <FaBars />
              </button>
            </div>
            <Link href="/favorites">
              <div className="text-xl text-gray-600 py-2" onClick={toggleMenu}>Favorites</div>
            </Link>
            <Link href="/notifications">
              <div className="text-xl text-gray-600 py-2" onClick={toggleMenu}>Notifications</div>
            </Link>
            <Link href="/settings">
              <div className="text-xl text-gray-600 py-2" onClick={toggleMenu}>Settings</div>
            </Link>
            <Link href="/profile">
              <div className="text-xl text-gray-600 py-2" onClick={toggleMenu}>Profile</div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

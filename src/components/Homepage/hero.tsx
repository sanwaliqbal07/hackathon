import React from 'react';
import Image from 'next/image';
import { HiArrowsUpDown } from "react-icons/hi2";
import { FaCircleDot } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div
            className="bg-blue-100 p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: 'url("/images/bl.jpg")', // Replace with your left card image URL
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="text-3xl w-[272px] font-bold text-[#FFFFFF]  mb-2">
              The Best Platform for Car Rental
            </h2> <br />
            <p className="text-white mb-6 w-[284px]">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            <Image
  src="/koen.png" // Leading slash is required
  alt="Car"
  width={340}
  height={108}
  className="mt-4 ml-40 object-cover"
/>
          </div>

          {/* Right Card */}
          <div
            className="bg-blue-200 p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: 'url("/images/br.jpg")', // Replace with your right card image URL
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="text-3xl font-bold text-[#FFFFFF] w-[272px] mb-2">
              Easy way to rent a car at a low price
            </h2> <br />
            <p className="text-white mb-6 w-[284px]">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <button className="bg-[#54A6FF] text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            <Image
  src="/nisaan.png" // Leading slash is required
  alt="Car"
  width={340}
  height={108}
  className="mt-4 ml-40 object-cover"
/>
          </div>
        </div>

        {/* Booking Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-8 bg-white p-6 rounded-lg shadow-md">
          {/* Pick-Up Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2 flex items-center"><FaCircleDot className="mr-2 text-blue-500" />Pick-Up</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-lg font-bold mb-1">Locations</label>
                <select className="w-full border-none rounded-md p-2">
               <option className="text-gray-900">Select your city</option>
               </select>
              </div>
              <div>
                <label className="block text-lg font-bold mb-1">Date</label>
                <select className="w-full border-none rounded-md p-2">
               <option className="text-gray-900">Select your Date</option>
               </select>
              </div>
              <div>
                <label className="block text-lg font-bold mb-1">Time</label>
                <select className="w-full border-none rounded-md p-2">
               <option className="text-gray-900">Select your Time</option>
               </select>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div>
          <button className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600">
            <HiArrowsUpDown />
            </button>
          </div>

          {/* Drop-Off Section */}
          <div className="flex-1">
          <h3 className="text-lg font-medium mb-2 flex items-center"><FaCircleDot className="mr-2 text-blue-500" />Drop-Off</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
              <label className="block text-lg font-bold mb-1">Locations</label>
              <select className="w-full border-none rounded-md p-2">
               <option className="text-gray-900">Select your city</option>
               </select>
              </div>
              <div>
                <label className="block text-lg font-bold mb-1">Date</label>
                <select className="w-full border-none rounded-md p-2">
               <option className="text-gray-900">Select your Date</option>
               </select>
              </div>
              <div>
                <label className="block text-lg font-bold mb-1">Time</label>
                <select className="w-full border-none rounded-md p-2">
               <option className="text-gray-900">Select your Time</option>
               </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
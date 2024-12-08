import React from 'react';

const CarRental = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold text-blue-500">Car Rental</h1>
      </div>

      {/* Filter Section */}
      <div className="bg-blue-500 text-white p-6 rounded-lg max-w-4xl mx-auto mb-8">
        <h3 className="text-lg font-semibold mb-4">Filter Options</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <select className="p-2 rounded-lg bg-white text-gray-800">
            <option>Select Your City</option>
            <option>City 1</option>
            <option>City 2</option>
          </select>
          <input type="date" className="p-2 rounded-lg bg-white text-gray-800" />
          <input type="time" className="p-2 rounded-lg bg-white text-gray-800" />
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16">
        {/* Card 1 */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Car Image"
            className="w-full"
          />
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold text-gray-700">SUV - All New Rush</h2>
            <p className="text-sm text-gray-500">Capacity: 6 People | 90L</p>
            <p className="text-xl font-bold text-blue-500 mt-2">$99.00/day</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
              Rent Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Car Image"
            className="w-full"
          />
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold text-gray-700">Sport - Nissan GT-R</h2>
            <p className="text-sm text-gray-500">Capacity: 2 People | 80L</p>
            <p className="text-xl font-bold text-blue-500 mt-2">$80.00/day</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
              Rent Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Car Image"
            className="w-full"
          />
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold text-gray-700">Sedan - Rolls-Royce</h2>
            <p className="text-sm text-gray-500">Capacity: 4 People | 70L</p>
            <p className="text-xl font-bold text-blue-500 mt-2">$96.00/day</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRental;
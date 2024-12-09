import React from 'react'
import Image from 'next/image'

const Left = () => {
  return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Rental Summary</h2>
            <div className="flex items-center mb-4">
              <Image
                src="/car.jpg"
                alt="Car"
                width={100}
                height={60}
                className="rounded-md"
              />
              <div className="ml-4">
                <h3 className="font-bold">Nissan GT - R</h3>
                <p className="text-yellow-500 flex items-center">
                  ★★★★★
                </p>
              </div>
            </div>
            <div className="text-right">
              <p>Total Rental Price:</p>
              <p className="text-2xl font-bold">$80.00</p>
            </div>
    </div>
  )
}

export default Left

import Header from "@/components/Homepage/header";
import Footer from "@/components/Homepage/footer";
import Sidebar from "@/components/Categories/sidebar";
import CarDetailsSection from "@/components/detail/detail";
import Reviews from "@/components/detail/review";
import React from "react";
import PopularCar from "@/components/Categories/cards"
import RecommendedCars from "@/components/Categories/cards2";

const Page = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main content area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar  />

        {/* Main content */}
        <div className="flex-1 p-6">
          <CarDetailsSection />
          <Reviews/>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm">
      <h2 className="text-sm font-medium text-gray-500">Popular Car</h2>
      <a
        href="#"
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        View All
      </a>
    </div>
          <PopularCar/>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm">
      <h2 className="text-sm font-medium text-gray-500">Recommendation Car</h2>
      <a
        href="#"
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        View All
      </a>
    </div>
          <RecommendedCars/>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;

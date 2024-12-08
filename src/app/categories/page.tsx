import React from "react";
import Header from "@/components/Homepage/header";
import Footer from "@/components/Homepage/footer";
import Sidebar from "@/components/Categories/sidebar";
import PopularCars from "@/components/Categories/cards";
import RecommendedCars from "@/components/Categories/cards2";
import RecCars from "@/components/Categories/cards3";
import BookingSection from "@/components/Categories/pickdrop";

const Categories = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-72">
          <Sidebar />
        </div>

        {/* Main Section */}
        <div className="flex-1 p-6 space-y-6">
          {/* Booking Section */}
          <div className="mb-8"> {/* Optional margin-bottom */}
            <BookingSection />
          </div>

          {/* Popular Cars */}
          <PopularCars />

          {/* Recommended Cars */}
          <RecommendedCars />

          {/* Additional Cars */}
          <RecCars />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Categories;

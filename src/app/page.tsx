import React from 'react'
import Hero from '@/components/Homepage/hero'
import Header from '@/components/Homepage/header'
import Footer from '@/components/Homepage/footer'
import PopularCars from '@/components/Homepage/cards'
import RecommendedCars from '@/components/Homepage/cards2'
import RecCars from '@/components/Homepage/cards3'
const page = () => {
  return (
    <div className='bg-gray-50'>
      <Header/>
      <Hero/>
      <PopularCars/>
      <RecommendedCars/>
      <RecCars/>
      <Footer/>
    </div>
  )
}

export default page

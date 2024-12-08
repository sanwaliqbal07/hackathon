import React from 'react'
import Hero from '@/components/hero'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CarRental from '@/components/carrental'
const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <CarRental/>
      <Footer/>
    </div>
  )
}

export default page

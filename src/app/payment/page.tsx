import React from 'react'
import Header from '@/components/Homepage/header';
import Footer from '@/components/Homepage/footer';
import CheckoutPage from '@/components/payment/checkout';
import Left from '@/components/payment/left';
const page = () => {
  return (
    <div>
      <Header/>
      <CheckoutPage/>
      <Left/>

      <Footer/>
    </div>
  )
}

export default page;

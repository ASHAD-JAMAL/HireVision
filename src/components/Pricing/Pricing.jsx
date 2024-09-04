import React from 'react'
import Navbar from '../Navbar'
import Faq from '../Faq'
import Testimonal from "../Testimonal"
import Box from '../Box'
import Footer from '../Footer'
import PricingHome from './PricingHome'
import PricingBox from './PricingBox'

function Pricing() {
  return (
    <>
        <Navbar/>
        <PricingHome/>
        <Faq/>
        <Testimonal/>
        <PricingBox/>
        <Box/>
        <Footer/>
    </>
  )
}

export default Pricing
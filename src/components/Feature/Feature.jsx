import React from 'react'
import Navbar from '../Navbar'
import FeatureCard from '../FeatureCard'
import Box from '../Box'
import Footer from '../Footer'
import FeatureHero from './FeatureHero'

function Feature() {
  return (
    <>
    <Navbar/>
    <FeatureHero/>
    <FeatureCard/>
    <Box/>
    <Footer/>
    </>
  )
}

export default Feature
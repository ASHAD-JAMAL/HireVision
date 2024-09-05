import React from 'react'
import Navbar from '../Navbar'
import FeatureCard from '../FeatureCard'
import Footer from '../Footer'
import FeatureHero from './FeatureHero'
import Box from '../Box'

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
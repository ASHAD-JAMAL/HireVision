import React from 'react'
import Navbar from '../Navbar'
import Faq from '../Faq'
import Box from '../Box'
import Footer from '../Footer'
import ContactHero from './ContactHero'

function Contact() {
  return (
   <>
    <Navbar/>
    <ContactHero/>
    <Faq/>
    <Box/>
    <Footer/>
   </>
  )
}

export default Contact
import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import BlogHome from './BlogHome'
import BlogBox from './BlogBox'

function Blog() {
  return (
    <>
        <Navbar />
        <BlogHome/>
        <BlogBox/>
        <Footer/>
    </>
  )
}

export default Blog
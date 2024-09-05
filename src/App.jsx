import React from 'react'
import Hero from './components/Hero'
import {Route,Routes} from "react-router-dom";
import Feature from './components/Feature/Feature';
import Pricing from './components/Pricing/Pricing';
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='' element={<Hero/>}/>
        <Route path='/feature' element={<Feature/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </>
  )
}

export default App
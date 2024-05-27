import React from 'react'
import Navbar from '../Collections/HomePage/Navbar/Navbar.js'
import Top from '../Collections/HomePage/Top/Top.js'
import Work from '../Collections/HomePage/Work/Work.js'
import Experience from '../Collections/HomePage/Experience/Experience.js'
import About from '../Collections/HomePage/About/About.js'
import Footer from '../Collections/HomePage/Footer/Footer.js'

const HomeGroup = () => {
  return (
    <>
        <Navbar/>
        <Top/>
        <Work/>
        <Experience/>
        <About/>
        <Footer/>
    </>

  )
}

export default HomeGroup
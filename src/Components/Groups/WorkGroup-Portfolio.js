import React from 'react'
import Navbar from '../Collections/HomePage/Navbar/Navbar'
import WorkHero from '../Collections/WorkPage-Portfolio/WorkHero/WorkHero'
import WorksHeader from '../Collections/WorkPage-Portfolio/WorksHeader/WorksHeader'
import WorksBody from '../Collections/WorkPage-Portfolio/WorksBody/WorksBody'
import WorksCarousel from '../Collections/WorkPage-Portfolio/WorksCarousel/WorksCarousel'
import Footer from '../Collections/HomePage/Footer/Footer'

const WorkGroup = () => {


  return (
    <>
        <Navbar/>
        <WorkHero/>
        <WorksHeader/>
        <WorksBody/>
        <WorksCarousel/>
        <Footer/>
    </>
  )
}

export default WorkGroup
import React from 'react'
import Navbar from '../Collections/HomePage/Navbar/Navbar'
import WorkHero from '../Collections/WorkPage-Tsundoku/WorkHero/WorkHero'
import WorksHeader from '../Collections/WorkPage-Tsundoku/WorksHeader/WorksHeader'
import WorksBody from '../Collections/WorkPage-Tsundoku/WorksBody/WorksBody'
import WorksCarousel from '../Collections/WorkPage-Tsundoku/WorksCarousel/WorksCarousel'
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
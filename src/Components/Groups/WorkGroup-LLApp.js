import React from 'react'
import Navbar from '../Collections/HomePage/Navbar/Navbar'
import WorkHero from '../Collections/WorkPage-LLApp/WorkHero/WorkHero'
import WorksHeader from '../Collections/WorkPage-LLApp/WorksHeader/WorksHeader'
import WorksBody from '../Collections/WorkPage-LLApp/WorksBody/WorksBody'
import WorksCarousel from '../Collections/WorkPage-LLApp/WorksCarousel/WorksCarousel'
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
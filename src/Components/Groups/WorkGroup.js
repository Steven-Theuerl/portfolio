import React from 'react'
import Navbar from '../Collections/HomePage/Navbar/Navbar'
import WorkHero from '../Collections/WorkPage/WorkHero/WorkHero'
import WorksHeader from '../Collections/WorkPage/WorksHeader/WorksHeader'
import WorksBody from '../Collections/WorkPage/WorksBody/WorksBody'

const WorkGroup = () => {
  return (
    <>
        <Navbar/>
        <WorkHero/>
        <WorksHeader/>
        <WorksBody/>
    </>
  )
}

export default WorkGroup
import React from 'react'
import './App.css'

import HomeGroup from './Components/Groups/HomeGroup'
import WorkGroupPortfolio from './Components/Groups/WorkGroup-Portfolio'
import WorkGroupLLApp from './Components/Groups/WorkGroup-LLApp'
import ContactGroup from './Components/Groups/ContactGroup'

import Navbar from './Components/Collections/HomePage/Navbar/Navbar'


import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomeGroup/>}/>
            <Route path='/Work-Portfolio' element={<WorkGroupPortfolio/>}/>
            <Route path='/Contact' element={<ContactGroup/>}/>
            <Route path='/Work-LLApp' element={<WorkGroupLLApp/>}/>
        </Routes>
    </>
  )
}
export default App;

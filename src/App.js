import React from 'react'
import './App.css'

import HomeGroup from './Components/Groups/HomeGroup'
import WorkGroupTsundoku from './Components/Groups/WorkGroup-Tsundoku'
import WorkGroupPortfolio from './Components/Groups/WorkGroup-Portfolio'
import WorkGroupLLApp from './Components/Groups/WorkGroup-LLApp'
import ContactGroup from './Components/Groups/ContactGroup'
import WorkGroupLLWebsite from './Components/Groups/WorkGroup-LLWebsite'
import ErrorPageGroup from './Components/Groups/ErrorPageGroup'

import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomeGroup/>}/>
            <Route path='/Work-Tsundoku' element={<WorkGroupTsundoku/>}/>
            <Route path='/Work-Portfolio' element={<WorkGroupPortfolio/>}/>
            <Route path='/Contact' element={<ContactGroup/>}/>
            <Route path='/Work-LLApp' element={<WorkGroupLLApp/>}/>
            <Route path='/Work-LLWebsite' element={<WorkGroupLLWebsite/>}/>
            <Route path='/*' element={<ErrorPageGroup/>}/>
        </Routes>
    </>
  )
}
export default App;

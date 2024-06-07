import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styles from './App.css'

import HomeGroup from './Components/Groups/HomeGroup'
import WorkGroup from './Components/Groups/WorkGroup'
import ContactGroup from './Components/Groups/ContactGroup'

import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomeGroup/>}/>
            <Route path='/Work1' element={<WorkGroup/>}/>
            <Route path='/Contact' element={<ContactGroup/>}/>
        </Routes>
    </>
  )
}
export default App;

import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styles from './App.css'

import Navbar from './Components/Navbar/Navbar'
import Top from './Components/Top/Top'
import Work from './Components/Work/Work'
import Experience from './Components/Experience/Experience'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'



const App = () => {
  const isPC = useMediaQuery({query: '(min-width: 801px)'})
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

  return (
    <>
      <Navbar/>
      <Top/>
      <Work/>
      <Experience/>
      <About/>
      <Footer/>
      {isMobile && <p>You are a tablet or mobile phone</p>}
    </>
  )
}
export default App;

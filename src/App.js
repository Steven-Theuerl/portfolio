import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styles from './App.css'

import NavbarPC from './Components/Navbar/NavbarPC'
import TopPC from './Components/Top/TopPC'
import WorkPC from './Components/Work/WorkPC'
import ExperiencePC from './Components/Experience/ExperiencePC'
import AboutPC from './Components/About/AboutPC'
import FooterPC from './Components/Footer/FooterPC'



const App = () => {
  const isPC = useMediaQuery({query: '(min-width: 801px)'})
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

  return (
    <>
      {isPC && <NavbarPC/>}
      {isPC && <TopPC/>}
      {isPC && <WorkPC/>}
      {isPC && <ExperiencePC/>}
      {isPC && <AboutPC/>}
      {isPC && <FooterPC/>}
      {isMobile && <p>You are a tablet or mobile phone</p>}
    </>
  )
}
export default App;

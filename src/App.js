import React from 'react'
import { useMediaQuery } from 'react-responsive'

import NavbarPC from './Components/Navbar/NavbarPC'
import TopPC from './Components/Top/TopPC'
import WorkPC from './Components/Work/WorkPC'


const App = () => {
  const isPC = useMediaQuery({query: '(min-width: 801px)'})
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

  return (
    <>
      {isPC && <NavbarPC/>}
      {isPC && <TopPC/>}
      {isPC && <WorkPC/>}
      {isMobile && <p>You are a tablet or mobile phone</p>}
    </>
  )
}
export default App;

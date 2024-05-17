import React from 'react'
import { useMediaQuery } from 'react-responsive'

import NavbarPC from './Components/Navbar/NavbarPC'
import TopPC from './Components/Top/TopPC'


const App = () => {
  const isPC = useMediaQuery({query: '(min-width: 376px)'})
  const isMobile = useMediaQuery({ query: '(max-width: 375px)' })

  return (
    <>
      {isPC && <NavbarPC/>}
      {isPC && <TopPC/>}
      {isMobile && <p>You are a tablet or mobile phone</p>}
    </>
  )
}
export default App;

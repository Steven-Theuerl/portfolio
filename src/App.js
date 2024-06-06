import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styles from './App.css'

import HomeGroup from './Components/Groups/HomeGroup'
import WorkGroup from './Components/Groups/WorkGroup'
import ContactGroup from './Components/Groups/ContactGroup'


const App = () => {
  const isPC = useMediaQuery({query: '(min-width: 801px)'})
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

  return (
    <>
        <ContactGroup/>
    </>
  )
}
export default App;

import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import './App.css'
// components
import Navbar from './Components/Navbar/Navbar'
import MobileMenu from './Components/MobileMenu/MobileMenu'
import Home from './Components/Home/Home'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className='App'>
      <CSSTransition
        in={open}
        timeout={500}
        unmountOnExit={true}
        classNames={'menu-'}>
        <MobileMenu />
      </CSSTransition>
      <Navbar open={open} setOpen={setOpen} />
      <Home />
    </div>
  )
}

export default App

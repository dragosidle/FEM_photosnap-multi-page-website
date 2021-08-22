import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import './App.css'
// components
import Navbar from './Components/Navbar/Navbar'
import MobileMenu from './Components/MobileMenu/MobileMenu'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Stories from './Components/Stories/Stories'
import Features from './Components/Features/Features'

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
      <CSSTransition
        in={open}
        timeout={500}
        unmountOnExit={true}
        classNames={'overlay-'}>
        <div className='overlay'></div>
      </CSSTransition>
      {/* <Home /> */}
      {/* <Stories /> */}
      <Features />
      <Footer />
    </div>
  )
}

export default App

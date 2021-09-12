import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
// components
import Navbar from './Components/Navbar/Navbar'
import MobileMenu from './Components/MobileMenu/MobileMenu'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Stories from './Components/Stories/Stories'
import Features from './Components/Features/Features'
import Pricing from './Components/Pricing/Pricing'

function App() {
  const [open, setOpen] = useState(false)
  const [monthly, setMonthly] = useState(true)

  return (
    <div className='App'>
      <CSSTransition
        in={open}
        timeout={500}
        unmountOnExit={true}
        classNames={'overlay-'}>
        <div className='overlay'></div>
      </CSSTransition>
      <Router>
        <CSSTransition
          in={open}
          timeout={500}
          unmountOnExit={true}
          classNames={'menu-'}>
          <MobileMenu open={open} setOpen={setOpen} />
        </CSSTransition>
        <Navbar switch={Switch} open={open} setOpen={setOpen} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/stories' component={Stories} />
          <Route path='/features' component={Features} />
          <Route path='/pricing'>
            <Pricing monthly={monthly} setMonthly={setMonthly} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App

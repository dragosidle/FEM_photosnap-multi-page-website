import { useState } from 'react'
import './Navbar.css'
import logo from './logo.svg'
import menuIcon from './menu.svg'
import closeIcon from './close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState(true)
  return (
    <nav>
      <img src={logo} alt='logo' />
      <ul>
        <li>Stories</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      <button>get an invite</button>
      <div onClick={() => setMenu(!menu)} className='nav-button'>
        <img src={menu ? menuIcon : closeIcon} alt='' />
      </div>
    </nav>
  )
}

export default Navbar

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
      <img
        className='menu-icon'
        src={menu ? menuIcon : closeIcon}
        onClick={() => setMenu(!menu)}
        alt='icon'
      />
    </nav>
  )
}

export default Navbar

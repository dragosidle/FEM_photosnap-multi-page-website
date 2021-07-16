import { useState } from 'react'
import './Navbar.css'
import logo from './logo.svg'
import menuIcon from './menu.svg'
import closeIcon from './close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <nav>
      <img src={logo} alt='logo' />
      <ul>
        <li>Stories</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      <button>get an invite</button>
      {menu ? <img src={menuIcon} /> : <img src={closeIcon} />}
    </nav>
  )
}

export default Navbar

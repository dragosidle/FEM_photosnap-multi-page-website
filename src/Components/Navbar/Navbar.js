import './Navbar.css'
import sprite from '../../sprite.svg'

const Navbar = () => {
  return (
    <nav>
      <svg className='logo'>
        <use href={sprite + '#logo'} />
      </svg>
      <ul>
        <li>Stories</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
    </nav>
  )
}

export default Navbar

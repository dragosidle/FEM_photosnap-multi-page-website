import './Navbar.css'
import { Link } from 'react-router-dom'

// components
import SvgLogo from '../../iconComponents/Logo'
import CtaButton from '../CtaButton/CtaButton'
import Burger from '../Burger/Burger'

const Navbar = (props) => {
  return (
    <nav>
      <Link className='desktop-link' to='/'>
        <SvgLogo color={'black'} />
      </Link>
      <ul className='desktop-links'>
        <Link className='desktop-link' to='/stories'>
          <li>Stories</li>
        </Link>
        <Link className='desktop-link' to='/features'>
          <li>Features</li>
        </Link>
        <Link className='desktop-link' to='/pricing'>
          <li>Pricing</li>
        </Link>
      </ul>
      <Burger open={props.open} setOpen={props.setOpen} />
      <CtaButton
        styling={'cta cta--black cta--desktop'}
        buttonText={'get an invite'}
      />
    </nav>
  )
}

export default Navbar

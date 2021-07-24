import './Navbar.css'
import menuIcon from './menu.svg'
import closeIcon from './close.svg'
// components
import NavLinks from '../NavLinks/NavLinks'
import Logo from '../Logo/Logo'
import CtaButton from '../CtaButton/CtaButton'

const Navbar = (props) => {
  return (
    <nav>
      <Logo />
      <NavLinks styling={'nav-desktop'} />
      <div onClick={() => props.openMenu(!props.open)} className='hamburger'>
        <img src={props.open ? closeIcon : menuIcon} alt='' />
      </div>
      <CtaButton styling={'cta cta--desktop'} buttonText={'get an invite'} />
    </nav>
  )
}

export default Navbar

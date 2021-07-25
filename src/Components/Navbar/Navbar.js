import './Navbar.css'

// components
import Logo from '../Logo/Logo'
import NavLinks from '../NavLinks/NavLinks'
import CtaButton from '../CtaButton/CtaButton'
import Hamburger from '../Hamburger/Hamburger'

const Navbar = (props) => {
  return (
    <nav>
      <Logo />
      <NavLinks styling={'nav-desktop'} />
      <Hamburger open={props.open} setOpen={props.setOpen} />
      <CtaButton styling={'cta cta--desktop'} buttonText={'get an invite'} />
    </nav>
  )
}

export default Navbar

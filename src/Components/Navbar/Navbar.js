import './Navbar.css'

// components
import SvgLogo from '../../iconComponents/Logo'
import NavLinks from '../NavLinks/NavLinks'
import CtaButton from '../CtaButton/CtaButton'
import Burger from '../Burger/Burger'

const Navbar = (props) => {
  return (
    <nav>
      <SvgLogo color={'black'} />
      <NavLinks styling={'nav-desktop'} />
      <Burger open={props.open} setOpen={props.setOpen} />
      <CtaButton styling={'cta cta--desktop'} buttonText={'get an invite'} />
    </nav>
  )
}

export default Navbar

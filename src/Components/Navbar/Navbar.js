import './Navbar.css'
import logo from './logo.svg'
import menuIcon from './menu.svg'
import closeIcon from './close.svg'
// components
import CtaButton from '../CtaButton/CtaButton'

const Navbar = (props) => {
  return (
    <nav>
      <img src={logo} alt='logo' />
      <ul>
        <li>Stories</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      {props.open ? (
        <div className='menu'>
          <ul>
            <li>stories</li>
            <li>features</li>
            <li>pricing</li>
          </ul>
          <div className='menu-divider'></div>
          <CtaButton buttonText={'get an invite'} />
        </div>
      ) : null}
      <CtaButton buttonText={'get an invite'} />
      <div onClick={() => props.openMenu(!props.open)} className='nav-button'>
        <img src={props.open ? closeIcon : menuIcon} alt='' />
      </div>
    </nav>
  )
}

export default Navbar

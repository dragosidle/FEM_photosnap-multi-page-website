import './MobileMenu.css'
import { Link } from 'react-router-dom'

// components
import CtaButton from '../CtaButton/CtaButton'

const MobileMenu = (props) => {
  return (
    <div className='menu'>
      <ul className='mobile-links'>
        <Link
          onClick={() => {
            props.setOpen(!props.open)
          }}
          className='mobile-link'
          to='/stories'>
          <li>Stories</li>
        </Link>
        <Link
          onClick={() => {
            props.setOpen(!props.open)
          }}
          className='mobile-link'
          to='/features'>
          <li>Features</li>
        </Link>
        <Link
          onClick={() => {
            props.setOpen(!props.open)
          }}
          className='mobile-link'
          to='/pricing'>
          <li>Pricing</li>
        </Link>
      </ul>
      <div className='menu-divider'></div>
      <CtaButton
        styling={'cta cta--mobile cta--black'}
        buttonText={'get an invite'}
      />
    </div>
  )
}

export default MobileMenu

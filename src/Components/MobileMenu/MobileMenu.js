import './MobileMenu.css'
// components
import CtaButton from '../CtaButton/CtaButton'
import NavLinks from '../NavLinks/NavLinks'

const MobileMenu = () => {
  return (
    <div className='menu'>
      <NavLinks styling={'nav-mobile'} />
      <div className='menu-divider'></div>
      <CtaButton
        styling={'cta cta--mobile cta--black'}
        buttonText={'get an invite'}
      />
    </div>
  )
}

export default MobileMenu

import './MobileMenu.css'
// components
import CtaButton from '../CtaButton/CtaButton'

const MobileMenu = () => {
  return (
    <div className='menu'>
      <ul>
        <li>stories</li>
        <li>features</li>
        <li>pricing</li>
      </ul>
      <div className='menu-divider'></div>
      <CtaButton style={'cta-mobile'} buttonText={'get an invite'} />
    </div>
  )
}

export default MobileMenu

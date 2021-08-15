import './Footer.css'

// assets
import sprite from '../sprite.svg'

// components
import SvgLogo from '../../iconComponents/Logo'
import NavLinks from '../NavLinks/NavLinks'
import ArrowBtn from '../ArrowBtn/ArrowBtn'
const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-split'>
        <SvgLogo color={'white'} />
        <div className='socials'>
          <svg className='social-icon'>
            <use href={sprite + '#facebook'} />
          </svg>
          <svg className='social-icon'>
            <use href={sprite + '#youtube'} />
          </svg>
          <svg className='social-icon'>
            <use href={sprite + '#twitter'} />
          </svg>
          <svg className='social-icon'>
            <use href={sprite + '#pinterest'} />
          </svg>
          <svg className='social-icon'>
            <use href={sprite + '#instagram'} />
          </svg>
        </div>
      </div>
      <NavLinks footer={true} styling={'footer-desktop'} />
      <div className='footer-split-2'>
        <ArrowBtn
          btnType={'arrow-btn'}
          btn={'get an invite'}
          arrow={'white'}
          font={'white'}
        />
        <h5 className='copyright'>Copyright 2019. All Rights Reserved</h5>
      </div>
    </section>
  )
}

export default Footer

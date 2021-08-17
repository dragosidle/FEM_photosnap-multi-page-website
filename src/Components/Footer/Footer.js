import './Footer.css'

// assets
import SvgFacebook from '../../iconComponents/Facebook'
import SvgYoutube from '../../iconComponents/Youtube'
import SvgTwitter from '../../iconComponents/Twitter'
import SvgPinterest from '../../iconComponents/Pinterest'
import SvgInstagram from '../../iconComponents/Instagram'

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
          <div className='social-icon'>
            <SvgFacebook />
          </div>
          <div className='social-icon'>
            <SvgYoutube />
          </div>
          <div className='social-icon'>
            <SvgTwitter />
          </div>
          <div className='social-icon'>
            <SvgPinterest />
          </div>
          <div className='social-icon'>
            <SvgInstagram />
          </div>
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

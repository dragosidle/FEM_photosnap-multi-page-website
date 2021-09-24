import './Footer.css'
import { Link } from 'react-router-dom'

// assets
import SvgFacebook from '../../iconComponents/Facebook'
import SvgYoutube from '../../iconComponents/Youtube'
import SvgTwitter from '../../iconComponents/Twitter'
import SvgPinterest from '../../iconComponents/Pinterest'
import SvgInstagram from '../../iconComponents/Instagram'

// components
import SvgLogo from '../../iconComponents/Logo'
import ArrowBtn from '../ArrowBtn/ArrowBtn'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-top'>
        <Link
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className='desktop-link'
          to='/'>
          <SvgLogo color={'white'} />
        </Link>
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
      <ul className='footer-links'>
        <Link
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className='desktop-link'
          to='/'>
          <li>Home</li>
        </Link>
        <Link
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className='desktop-link'
          to='/stories'>
          <li>Stories</li>
        </Link>
        <Link
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className='desktop-link'
          to='/features'>
          <li>Features</li>
        </Link>
        <Link
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className='desktop-link'
          to='/pricing'>
          <li>Pricing</li>
        </Link>
      </ul>
      <div className='footer-bottom'>
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

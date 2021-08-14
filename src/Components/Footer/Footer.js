import './Footer.css'

// assets
import sprite from '../sprite.svg'

// components
import Logo from '../Logo/Logo'
import NavLinks from '../NavLinks/NavLinks'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='split'>
        <Logo />
        <div className='socials'>
          <svg>
            <use href={sprite + '#logo'} />
          </svg>
          <svg>
            <use href={sprite + '#facebook'} />
          </svg>
          <svg>
            <use href={sprite + '#youtube'} />
          </svg>
          <svg>
            <use href={sprite + '#twitter'} />
          </svg>
          <svg>
            <use href={sprite + '#pinterest'} />
          </svg>
          <svg>
            <use href={sprite + '#instagram'} />
          </svg>
        </div>
      </div>
      <NavLinks footer />
      <div className='split'></div>
    </section>
  )
}

export default Footer

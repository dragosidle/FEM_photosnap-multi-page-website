// import logo from './logo.svg'
import sprite from '../sprite.svg'

const Logo = (props) => {
  return (
    <svg style={{ fill: props.color, width: '370px' }}>
      <use href={sprite + '#logo'} />
    </svg>
  )
  //  <img style={{ height: '16px' }} src={logo} alt='logo' />
}

export default Logo

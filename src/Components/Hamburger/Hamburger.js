import './Burger.css'
// components
import menuIcon from './menu.svg'
import closeIcon from './close.svg'

const Burger = (props) => {
  return (
    <div onClick={() => props.setOpen(!props.open)} className='burger'>
      <img src={props.open ? closeIcon : menuIcon} alt='' />
    </div>
  )
}

export default Burger

// import { useState } from 'react'

import './ArrowBtn.css'
import sprite from './sprite.svg'

const ArrowBtn = (props) => {
  //   const [hover, setHover] = useState(false)

  return (
    <div className={props.btnType}>
      <h3 style={{ color: props.font }}>{props.btn}</h3>
      <svg className={`arrow ${props.arrow}`}>
        <use href={sprite + '#arrow'} />
      </svg>
    </div>
  )
}

export default ArrowBtn

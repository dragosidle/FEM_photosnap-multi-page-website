// import { useState } from 'react'

import './ArrowBtn.css'
import SvgArrow from '../../iconComponents/Arrow'

const ArrowBtn = (props) => {
  return (
    <div className={props.btnType}>
      <h3 style={{ color: props.font }}>{props.btn}</h3>
      <SvgArrow color={props.arrow} />
    </div>
  )
}

export default ArrowBtn

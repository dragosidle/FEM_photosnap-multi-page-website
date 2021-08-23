import './SwitchBtn.css'

const SwitchBtn = (props) => {
  return (
    <div className='switch-container'>
      {props.trailing && (
        <h5 style={{ opacity: props.monthly ? 0 : 1 }}>{props.trailing}</h5>
      )}
      <div className='switch'>
        <div
          onClick={() => props.setMonthly(!props.monthly)}
          className='switch-background'>
          <div className='switch-circle'></div>
        </div>
      </div>
      {props.leading && <h5>{props.leading}</h5>}
    </div>
  )
}

export default SwitchBtn

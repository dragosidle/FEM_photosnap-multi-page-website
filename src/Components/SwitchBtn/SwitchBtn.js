import './SwitchBtn.css'

const SwitchBtn = (props) => {
  return (
    <div className='switch-container'>
      {props.trailing && (
        <h5 style={{ opacity: props.monthly ? 1 : 0.5 }}>{props.trailing}</h5>
      )}
      <div className='switch'>
        <div
          onClick={() => props.setMonthly(!props.monthly)}
          className='switch-background'
          style={{ backgroundColor: props.monthly ? '#dfdfdf' : 'black' }}>
          <div
            style={{
              backgroundColor: props.monthly ? 'black' : 'white',
              right: props.monthly ? '30px' : '0px',
            }}
            className='switch-circle'></div>
        </div>
      </div>
      {props.leading && (
        <h5 style={{ opacity: props.monthly ? 0.5 : 1 }}>{props.leading}</h5>
      )}
    </div>
  )
}

export default SwitchBtn

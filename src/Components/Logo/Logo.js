import sprite from '../sprite.svg'

const Logo = (props) => {
  return (
    <svg style={{ fill: props.color, width: '170px', height: '50px' }}>
      <use href={sprite + '#logo'} />
    </svg>
  )
}

export default Logo

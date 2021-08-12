import './FeatureSet.css'

// assets
import sprite from '../sprite.svg'

const Feature = (props) => {
  return (
    <div className='feature'>
      <svg className={'feature-icon'}>
        <use href={sprite + `#${props.icon}`} />
      </svg>
      <div className='feature-text'>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Feature

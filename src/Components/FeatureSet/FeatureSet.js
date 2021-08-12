import './FeatureSet.css'

// components
import Feature from './Feature'

const FeatureSet = (props) => {
  return (
    <div className='feature-set'>
      <Feature
        icon={props.icon1}
        title={props.title1}
        description={props.description1}
      />
      <Feature
        icon={props.icon2}
        title={props.title2}
        description={props.description2}
      />
      <Feature
        icon={props.icon3}
        title={props.title3}
        description={props.description3}
      />
    </div>
  )
}

export default FeatureSet

import './PricingCard.css'

// components
import CtaButton from '../CtaButton/CtaButton'

const PricingCard = (props) => {
  return (
    <div className={props.styling}>
      {props.colorThing && <div className='color-thing-card'></div>}
      <div className='plan-info'>
        <div className='pricing-card--text'>
          <h3>{props.title}</h3>
          <p style={{ margin: '1rem 0 0 0' }}>{props.details}</p>
        </div>
        <div className='pricing-card--price'>
          <h2>{props.price}</h2>
          <p>{props.billing}</p>
        </div>
      </div>
      <CtaButton styling={props.btn} buttonText={'pick plan'} />
    </div>
  )
}

export default PricingCard

import './PricingCard.css'

// components
import CtaButton from '../CtaButton/CtaButton'

const PricingCard = (props) => {
  return (
    <div className={props.styling}>
      <div className='pricing-card--text'>
        <h3>{props.title}</h3>
        <p>{props.details}</p>
      </div>
      <div className='pricing-card--price'>
        <h3>{props.price}</h3>
        <p>{props.billing}</p>
      </div>
      <CtaButton />
    </div>
  )
}

export default PricingCard

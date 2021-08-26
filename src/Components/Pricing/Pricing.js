import './Pricing.css'

// components
import Article from '../Article/Article'
import SwitchBtn from '../SwitchBtn/SwitchBtn'
import PricingCard from '../PricingCard/PricingCard'

// assets
import hero from '../../assets/pricing/desktop/hero.jpg'

const Pricing = (props) => {
  return (
    <main>
      <Article
        title={'Pricing'}
        description={
          'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
        }
        image={hero}
        colorThing={'color-thing'}
        background={'black'}
        font={'white'}
        article={'article'}></Article>
      <section className='payment-details'>
        <SwitchBtn
          monthly={props.monthly}
          setMonthly={props.setMonthly}
          trailing={'Monthly'}
          leading={'Yearly'}
        />
        <div className='pricing-cards basic-card'>
          <PricingCard
            styling={'pricing-card'}
            title={'Basic'}
            details={
              'Includes basic usage of our platform. Recommended for new and aspiring photographers.'
            }
            price={19.0}
            billing={'per month'}
          />
        </div>
      </section>
    </main>
  )
}

export default Pricing

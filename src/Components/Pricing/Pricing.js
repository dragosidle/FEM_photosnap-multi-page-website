import './Pricing.css'

// components
import Article from '../Article/Article'
import SwitchBtn from '../SwitchBtn/SwitchBtn'
import PricingCard from '../PricingCard/PricingCard'
import StaticBanner from '../StaticBanner/StaticBanner'
import Table from '../Table/Table'

// assets
import hero from '../../assets/pricing/desktop/hero.jpg'
import background from '../../assets/shared/desktop/bg-beta.jpg'

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
        <div className='pricing-cards'>
          <PricingCard
            styling={'pricing-card basic-card'}
            title={'Basic'}
            details={
              'Includes basic usage of our platform. Recommended for new and aspiring photographers.'
            }
            price={props.monthly ? '$19.00' : '$190.00'}
            billing={props.monthly ? 'per month' : 'per year'}
            btn={'cta cta--card cta--black'}
          />
          <PricingCard
            colorThing={true}
            styling={'pricing-card main-card'}
            title={'Pro'}
            details={
              'More advanced features available. Recommended for photography veterans and professionals.'
            }
            price={props.monthly ? '$39.00' : '$390.00'}
            billing={props.monthly ? 'per month' : 'per year'}
            btn={'cta cta--card cta--white'}
          />
          <PricingCard
            styling={'pricing-card basic-card'}
            title={'Business'}
            details={
              'Additional features available such as more detailed metrics. Recommended for business owners.'
            }
            price={props.monthly ? '$99.00' : '$990.00'}
            billing={props.monthly ? 'per month' : 'per year'}
            btn={'cta cta--card cta--black'}
          />
        </div>
      </section>
      <section className='compare-table'>
        <h1>compare</h1>
        <Table />
      </section>
      <StaticBanner
        message={'We’re in beta. Get your invite today!'}
        background={background}
      />
    </main>
  )
}

export default Pricing

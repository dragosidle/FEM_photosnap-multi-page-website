import './StaticBanner.css'

// components
import ArrowBtn from '../ArrowBtn/ArrowBtn'

const StaticBanner = (props) => {
  return (
    <section
      className='static-banner'
      style={{ backgroundImage: `url(${props.background})` }}>
      <div className='left-half'>
        <div className='color-thing-banner'></div>
        <h1>{props.message}</h1>
      </div>
      <div className='right-half'>
        <ArrowBtn
          btnType={'arrow-btn'}
          btn={'get an invite'}
          font={'white'}
          arrow={'white'}
        />
      </div>
    </section>
  )
}

export default StaticBanner

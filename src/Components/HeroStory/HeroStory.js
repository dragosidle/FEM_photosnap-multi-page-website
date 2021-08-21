import './HeroStory.css'

// components
import ArrowBtn from '../ArrowBtn/ArrowBtn'

const HeroStory = (props) => {
  return (
    <section
      style={{ backgroundImage: `url(${props.background}` }}
      className='hero-story'>
      <div
        style={{ backgroundImage: `url(${props.background}` }}
        className='invisible'></div>
      <div className='story-preview'>
        <h4>LAST MONTH’S FEATURED STORY</h4>
        <h1>{props.Title}</h1>
        <div className='date-author'>
          <h4 style={{ opacity: '75%', margin: '0 1rem 0 0' }}>{props.Date}</h4>
          <h4>by {props.Author}</h4>
        </div>
        <p>{props.Description}</p>
        <ArrowBtn
          btn={'read the story'}
          font={'white'}
          arrow={'white'}
          btnType={'arrow-btn'}
        />
      </div>
    </section>
  )
}

export default HeroStory

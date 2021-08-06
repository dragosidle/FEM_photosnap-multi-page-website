// import {useState} from 'react'
import './StoryCard.css'

// components
import ArrowBtn from '../ArrowBtn/ArrowBtn'
// const [hover, setHover] = useState(false)

const StoryCard = (props) => {
  return (
    <div
      className='story-card'
      style={{ backgroundImage: `url(${props.RowImg})` }}>
      <div className='wrapper'>
        <div className='title-description'>
          <h3>{props.Title}</h3>
          <h4>by {props.Author}</h4>
          <div className='divider'></div>
        </div>
        <ArrowBtn
          btnType={'arrow-btn long'}
          arrow={'white'}
          font={'white'}
          btn={'read story'}></ArrowBtn>
      </div>
      <div className='bottom-stripe'></div>
    </div>
  )
}

export default StoryCard

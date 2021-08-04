import './StoryCard.css'

// components

const StoryCard = (props) => {
  return (
    <div
      className='story-card'
      style={{ backgroundImage: `url(${props.RowImg})` }}>
      <div className='title-description'>
        <h3>{props.Title}</h3>
        <h4>by {props.Author}</h4>
        <div className='divider'></div>
      </div>
    </div>
  )
}

export default StoryCard

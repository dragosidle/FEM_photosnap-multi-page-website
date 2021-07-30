import './Article.css'
import sprite from './sprite.svg'

const ArticleButton = (props) => {
  return (
    <div className='article-btn'>
      <h3>{props.btn}</h3>
      <svg className='arrow'>
        <use href={sprite + '#arrow'} />
      </svg>
    </div>
  )
}

export default ArticleButton

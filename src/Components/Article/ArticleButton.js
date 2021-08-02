import './Article.css'
import sprite from './sprite.svg'

const ArticleButton = (props) => {
  return (
    <div className='article-btn'>
      <h3 style={{ color: props.font }}>{props.btn}</h3>
      <svg className={`arrow ${props.arrow}`}>
        <use href={sprite + '#arrow'} />
      </svg>
    </div>
  )
}

export default ArticleButton

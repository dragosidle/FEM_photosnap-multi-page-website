import ArticleButton from './ArticleButton'
import './Article.css'

const Article = (props) => {
  return (
    <article className='article'>
      <div className='text-side'>
        {props.title}
        {props.description}
        <ArticleButton>{props.btn}</ArticleButton>
      </div>
      <div className='image-side'></div>
    </article>
  )
}

export default Article

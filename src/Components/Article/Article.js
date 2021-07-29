import ArticleButton from './ArticleButton'
import './Article.css'

const Article = (props) => {
  return (
    <article className='article'>
      <div className='text-side'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <ArticleButton>{props.btn}</ArticleButton>
      </div>
      <div className='image-side'></div>
    </article>
  )
}

export default Article

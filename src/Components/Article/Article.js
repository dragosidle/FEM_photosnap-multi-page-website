import ArticleButton from './ArticleButton'
import './Article.css'

const Article = (props) => {
  return (
    <article className='article'>
      <div
        className='text-side'
        style={{ color: props.font, backgroundColor: props.background }}>
        {props.colorThing && <div className={props.colorThing}></div>}
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <ArticleButton btn={props.btn}></ArticleButton>
      </div>
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className='image-side'></div>
    </article>
  )
}

export default Article

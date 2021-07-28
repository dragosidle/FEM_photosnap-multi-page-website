import ArticleButton from './ArticleButton'

const Article = (props) => {
  return (
    <article>
      <div className='text-side'>
        {props.title}
        {props.description}
        {props.btn}
        <ArticleButton />
      </div>
      <div className='image-side'></div>
    </article>
  )
}

export default Article

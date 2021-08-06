import './Article.css'

// components
import ArrowBtn from '../ArrowBtn/ArrowBtn'

const Article = (props) => {
  return (
    <article className={props.article}>
      <div
        className='text-side'
        style={{
          color: props.font,
          backgroundColor: props.background,
        }}>
        {props.colorThing && <div className={props.colorThing}></div>}
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <ArrowBtn
          btnType={'arrow-btn'}
          arrow={props.arrow}
          font={props.font}
          btn={props.btn}></ArrowBtn>
      </div>
      <div
        style={{
          backgroundImage: `url(${props.image})`,
        }}
        className='image-side'></div>
    </article>
  )
}

export default Article

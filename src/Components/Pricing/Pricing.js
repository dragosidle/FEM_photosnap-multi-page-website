// components
import Article from '../Article/Article'

// assets
import hero from '../../assets/pricing/desktop/hero.jpg'

const Pricing = () => {
  return (
    <section>
      <Article
        title={'Pricing'}
        description={
          'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
        }
        image={hero}
        colorThing={'color-thing'}
        background={'black'}
        font={'white'}
        article={'article'}></Article>
    </section>
  )
}

export default Pricing

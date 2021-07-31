import './Home.css'

// assets
import Dimg1 from '../../assets/home/desktop/create-and-share.jpg'
import Dimg2 from '../../assets/home/desktop/beautiful-stories.jpg'
import Dimg3 from '../../assets/home/desktop/designed-for-everyone.jpg'
import Mimg1 from '../../assets/home/mobile/create-and-share.jpg'
import Mimg2 from '../../assets/home/mobile/beautiful-stories.jpg'
import Mimg3 from '../../assets/home/mobile/designed-for-everyone.jpg'
import Timg1 from '../../assets/home/tablet/create-and-share.jpg'
import Timg2 from '../../assets/home/tablet/beautiful-stories.jpg'
import Timg3 from '../../assets/home/tablet/designed-for-everyone.jpg'

//components
import Article from '../Article/Article'

const Home = () => {
  return (
    <main className='homepage-container'>
      <Article
        title={'Create and share your photo stories.'}
        description={
          'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
        }
        btn={'get an invite'}
        image={Dimg1}
        colorThing={'color-thing'}
        background={'black'}
        font={'white'}></Article>
      <Article
        title={'Beautiful stories every time'}
        description={
          'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.'
        }
        btn={'view the stories'}
        background={'white'}
        font={'black'}></Article>
      <Article
        title={'designed for everyone'}
        description={
          'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.'
        }
        btn={'view the stories'}
        background={'white'}
        font={'black'}></Article>
    </main>
  )
}

export default Home

import './Home.css'

// assets
import Dimg1 from '../../assets/home/desktop/create-and-share.jpg'
import Dimg2 from '../../assets/home/desktop/beautiful-stories.jpg'
import Dimg3 from '../../assets/home/desktop/designed-for-everyone.jpg'
// import Mimg1 from '../../assets/home/mobile/create-and-share.jpg'
// import Mimg2 from '../../assets/home/mobile/beautiful-stories.jpg'
// import Mimg3 from '../../assets/home/mobile/designed-for-everyone.jpg'
// import Timg1 from '../../assets/home/tablet/create-and-share.jpg'
// import Timg2 from '../../assets/home/tablet/beautiful-stories.jpg'
// import Timg3 from '../../assets/home/tablet/designed-for-everyone.jpg'

import RowImg1 from '../../assets/stories/desktop/mountains.jpg'
import RowImg2 from '../../assets/stories/desktop/cityscapes.jpg'
import RowImg3 from '../../assets/stories/desktop/18-days-voyage.jpg'
import RowImg4 from '../../assets/stories/desktop/architecturals.jpg'

//components
import Article from '../Article/Article'
import RowPics from '../RowPics/RowPics'
import FeatureSet from '../FeatureSet/FeatureSet'

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
        font={'white'}
        article={'article'}
        arrow={'white'}></Article>
      <Article
        title={'Beautiful stories every time'}
        description={
          'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.'
        }
        btn={'view the stories'}
        image={Dimg2}
        background={'white'}
        font={'black'}
        article={'article-flip'}
        arrow={'black'}></Article>
      <Article
        title={'designed for everyone'}
        description={
          'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.'
        }
        btn={'view the stories'}
        image={Dimg3}
        background={'white'}
        font={'black'}
        article={'article'}
        arrow={'black'}></Article>
      <RowPics
        RowImg1={RowImg1}
        Title1={'The Mountains'}
        Author1={'John Appleseed'}
        RowImg2={RowImg2}
        Title2={'Sunset Cityscapes'}
        Author2={'Benjamin Cruz'}
        RowImg3={RowImg3}
        Title3={'18 Days Voyage'}
        Author3={'Alexei Borodin'}
        RowImg4={RowImg4}
        Title4={'Architecturals'}
        Author4={'Samantha Brooke'}
      />
      <FeatureSet
        icon1={'responsive'}
        title1={'100% Responsive'}
        description1={
          'No matter which device you’re on, our site is fully responsive and stories look beautiful on any screen.'
        }
        icon2={'no-limit'}
        title2={'No Photo Upload Limit'}
        description2={
          'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.'
        }
        icon3={'embed'}
        title3={'Available to embed'}
        description3={
          'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. '
        }
      />
    </main>
  )
}

export default Home

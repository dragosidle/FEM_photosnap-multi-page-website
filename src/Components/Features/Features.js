import './Features.css'

// assets
import Dimg1 from '../../assets/features/desktop/hero.jpg'

// components
import FeatureSet from '../FeatureSet/FeatureSet'
import Article from '../Article/Article'

const Features = () => {
  return (
    <main className='features'>
      <Article
        title={'Features'}
        description={
          'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
        }
        image={Dimg1}
        colorThing={'color-thing'}
        background={'black'}
        font={'white'}
        height={'500px'}
        article={'article'}></Article>
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
        icon4={'custom-domain'}
        title4={'Custom Domain'}
        description4={
          'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!'
        }
        icon5={'boost-exposure'}
        title5={'Boost Your Exposure'}
        description5={
          'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.'
        }
        icon6={'drag-drop'}
        title6={'Drag & Drop Image'}
        description6={
          'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.'
        }
      />
    </main>
  )
}

export default Features

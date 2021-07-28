import './Homepage.css'
//components

import Article from '../Article/Article'

const Homepage = () => {
  return (
    <main className='homepage-container'>
      <Article
        title={'Create and share your photo stories'}
        description={
          'Create and share your photo Stories Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
        }
        btn={'get an invite'}></Article>
      <Article
        title={'Beautiful stories every time'}
        description={
          'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.'
        }
        btn={'view the stories'}></Article>
      <Article
        title={'designed for everyone'}
        description={
          'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.'
        }
        btn={'view the stories'}></Article>
    </main>
  )
}

export default Homepage

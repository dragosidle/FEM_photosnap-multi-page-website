import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import './App.css'
// components
import Navbar from './Components/Navbar/Navbar'
import MobileMenu from './Components/MobileMenu/MobileMenu'
import Homepage from './Components/Homepage/Homepage'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className='App'>
      <CSSTransition
        in={open}
        timeout={500}
        unmountOnExit={true}
        classNames={'menu-'}>
        <MobileMenu />
      </CSSTransition>
      <Navbar open={open} setOpen={setOpen} />
      <Homepage />
      Beautiful stories every time We provide design templates to ensure your
      stories look terrific. Easily add photos, text, embed maps and media from
      other networks. Then share your story with everyone. View the stories
      Designed for everyone Photosnap can help you create stories that resonate
      with your audience. Our tool is designed for photographers of all levels,
      brands, businesses you name it. View the stories The Mountains by John
      Appleseed Read Story Sunset Cityscapes by Benjamin Cruz Read Story 18 Days
      Voyage by Alexei Borodin Read Story Architecturals by Samantha Brooke Read
      Story 100% Responsive No matter which the device you’re on, our site is
      fully responsive and stories look beautiful on any screen. No Photo Upload
      Limit Our tool has no limits on uploads or bandwidth. Freely upload in
      bulk and share all of your stories in one go. Available to Embed Embed
      Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google
      Maps, and more. Home Stories Features Pricing Get an invite Copyright
      2019. All Rights Reserved Copyright 2019. All Rights Reserved
    </div>
  )
}

export default App

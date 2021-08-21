import './Stories.css'

// components
import RowPics from '../RowPics/RowPics'
import HeroStory from '../HeroStory/HeroStory'

//assets
import RowImg1 from '../../assets/stories/desktop/mountains.jpg'
import RowImg2 from '../../assets/stories/desktop/cityscapes.jpg'
import RowImg3 from '../../assets/stories/desktop/18-days-voyage.jpg'
import RowImg4 from '../../assets/stories/desktop/architecturals.jpg'
import RowImg5 from '../../assets/stories/desktop/world-tour.jpg'
import RowImg6 from '../../assets/stories/desktop/unforeseen-corners.jpg'
import RowImg7 from '../../assets/stories/desktop/king-on-africa.jpg'
import RowImg8 from '../../assets/stories/desktop/trip-to-nowhere.jpg'
import RowImg9 from '../../assets/stories/desktop/rage-of-the-sea.jpg'
import RowImg10 from '../../assets/stories/desktop/running-free.jpg'
import RowImg11 from '../../assets/stories/desktop/behind-the-waves.jpg'
import RowImg12 from '../../assets/stories/desktop/calm-waters.jpg'
import RowImg13 from '../../assets/stories/desktop/milky-way.jpg'
import RowImg14 from '../../assets/stories/desktop/dark-forest.jpg'
import RowImg15 from '../../assets/stories/desktop/somwarpet.jpg'
import RowImg16 from '../../assets/stories/desktop/land-of-dreams.jpg'
import HeroImage from '../../assets/stories/desktop/moon-of-appalacia.jpg'

const Stories = () => {
  return (
    <main className='stories-container'>
      <HeroStory
        Title={'HAZY FULL MOON OF APPALACHIA'}
        Date={'March 2nd 2020'}
        Author={'John Appleseed'}
        Description={
          'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'
        }
        background={HeroImage}
      />
      <RowPics
        Date1={'April 16th 2020'}
        RowImg1={RowImg1}
        Title1={'The Mountains'}
        Author1={'John Appleseed'}
        Date2={'April 14th 2020'}
        RowImg2={RowImg2}
        Title2={'Sunset Cityscapes'}
        Author2={'Benjamin Cruz'}
        Date3={'April 11th 2020'}
        RowImg3={RowImg3}
        Title3={'18 Days Voyage'}
        Author3={'Alexei Borodin'}
        Date4={'April 9th 2020'}
        RowImg4={RowImg4}
        Title4={'Architecturals'}
        Author4={'Samantha Brooke'}
      />
      <RowPics
        Date1={'April 7th 2020'}
        Date2={'April 3rd 2020'}
        Date3={'March 29th 2020'}
        Date4={'March 21st 2020'}
        RowImg1={RowImg5}
        Title1={'World Tour 2019'}
        Author1={'Timothy Wagner'}
        RowImg2={RowImg6}
        Title2={'Unforeseen Corners'}
        Author2={'William Malcolm'}
        RowImg3={RowImg7}
        Title3={'King on Africa: Part II'}
        Author3={'Tim Hillenburg'}
        RowImg4={RowImg8}
        Title4={'The Trip to Nowhere'}
        Author4={'Felicia Rourke'}
      />
      <RowPics
        Date1={'March 19th 2020'}
        Date2={'March 16th 2020'}
        Date3={'March 11th 2020'}
        Date4={'March 9th 2020'}
        RowImg1={RowImg9}
        Title1={'Rage of The Sea'}
        Author1={'Mohammed Abdul'}
        RowImg2={RowImg10}
        Title2={'Running Free'}
        Author2={'Michelle'}
        RowImg3={RowImg11}
        Title3={'Behind the Waves'}
        Author3={'Lamarr Wilson'}
        RowImg4={RowImg12}
        Title4={'Calm Waters'}
        Author4={'Samantha Brooke'}
      />
      <RowPics
        Date1={'March 5th 2020'}
        Date2={'March 4th 2020'}
        Date3={'March 1st 2020'}
        Date4={'February 25th 2020'}
        RowImg1={RowImg13}
        Title1={'The Milky Way'}
        Author1={'Benjamin Cruz'}
        RowImg2={RowImg14}
        Title2={'Night at The Dark Forest'}
        Author2={'Mohammed Abdul'}
        RowImg3={RowImg15}
        Title3={'Somwarpet’s Beauty'}
        Author3={'Michelle'}
        RowImg4={RowImg16}
        Title4={'Land of Dreams'}
        Author4={'William Malcolm'}
      />
    </main>
  )
}

export default Stories

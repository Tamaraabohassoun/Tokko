import EnrollButton from './EnrollButton'
import ShapesOnTheSide from './ShapesOnTheSide'

import eye from "../assets/images/eye.svg"
import heart from "../assets/images/heart.svg"
import message from "../assets/images/message.svg"
import bookMarker from "../assets/images/bookmark.svg"

import person1 from "../assets/images/person1-hero.avif"
import person2 from "../assets/images/person2-hero.avif"
import person3 from "../assets/images/person3-hero.avif"
import person4 from "../assets/images/person4-hero.avif"

const HeroSection = () => {
  return (

   <section className='center-conatiner min-h-screen '>
    <h1 className='text-[80px] font-bold text-text-black max-w-[472px]'>Take over the timeline</h1>
    <p className='text-text-secondary text-[20px] font-medium '>Unlock the content tactics creators use to blow up fast and stay at the top of the feed.</p>
    <div className='flex gap-3'>
      <EnrollButton text='Enroll Now'/>
      <EnrollButton text='See Details' className='bg-gray-200! text-black! '/>

    </div>
    <ShapesOnTheSide img={eye} number={+8600}/>
    <ShapesOnTheSide img={heart} number={+1520}/>
    <ShapesOnTheSide img={message} number={+1160}/>
    <ShapesOnTheSide img={bookMarker} number={+730}/>

    <div className='flex gap-1'>
      <div className=''><img  src={person1} alt="person"/> </div>
      <div className=''><img src={person2} alt="person"/> </div>
      <div className=''><img src={person3} alt="person"/> </div>
      <div className=''><img src={person4} alt="person"/> </div>
    </div>
    
    
    
   </section>
  )
}

export default HeroSection
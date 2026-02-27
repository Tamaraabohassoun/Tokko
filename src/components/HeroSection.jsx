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

   <section className='center-conatiner min-h-screen flex justify-center items-center flex-col gap-3.5 relative'>
          <ShapesOnTheSide className='absolute top-[13%] left-[22%] -rotate-12' img={eye} number={8600}/>
          <ShapesOnTheSide className='absolute top-[35%] left-[21%] rotate-12' img={heart} number={1520}/>
          <ShapesOnTheSide className='absolute top-[13%] right-[23%] rotate-12' img={message} number={1160}/>
          <ShapesOnTheSide className='absolute top-[35%] right-[23%] -rotate-12' img={bookMarker} number={730}/>

          <h1 className='text-[85px] font-bold text-text-black max-w-125 text-center leading-22.5'>Take over the timeline</h1>
          <p className='text-text-secondary text-[22px] font-medium text-center max-w-120'>Unlock the content tactics creators use to blow up fast and stay at the top of the feed.</p>
          
          <div className='flex gap-3 mt-2 mb-12'>
            <EnrollButton text='Enroll Now' className='py-3 px-5'/>
            <EnrollButton text='See Details' className='bg-gray-200! text-black! py-3 px-5 '/>
          </div>

          <div className='flex gap-[-40px] items-center justify-center'>
            <div className='background-img-hero-section -rotate-[7deg] z-10'><img className='img-hero-section' src={person1} alt="person"/> </div>
            <div className='background-img-hero-section rotate-6 -translate-y-5 -ml-10 z-20'><img className='img-hero-section' src={person2} alt="person"/> </div>
            <div className='background-img-hero-section -rotate-[7deg] -ml-10 z-30'><img className='img-hero-section' src={person3} alt="person"/> </div>
            <div className='background-img-hero-section rotate-6 -translate-y-5 -ml-10 z-40'><img className='img-hero-section' src={person4} alt="person"/> </div>
          </div>
        </section>
  )}


export default HeroSection
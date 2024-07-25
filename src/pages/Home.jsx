import React, { useRef } from 'react'
import Carousel from '../components/Carousel'
import ContactForm from '../components/ContactForm'
import Gallery from './Gallery'
import GalleryGrid from '../components/GalleryGrid'
import QuickLinks from '../components/QuickLinks'

const Home = ({ contactFormRef }) => {
    
    return (
    <div className=' hide-scrollbar'>
        <div>
            <img className='hidden md:block' src="/heroImageDesktop.jpeg" alt="" />
            <img className=' md:hidden' src="/heroImageMobile.jpeg" alt="" />
        </div>
        <div className=' flex flex-col items-center mt-8'>
            <div>
            <div className='font-bold text-2xl md:text-3xl text-primary'>Education that Sparks Change</div>
            <div className='flex justify-center'>
            <div className="w-[162px] border-t-4 border-secondary mt-2"></div>
            </div>
            </div>
            <div className='md:flex md:items-center'>
            <div className='mt-4 px-2 font-medium text-[15px] md:text-[19px]'>
            <div className='text-center md:max-w-[900px]'>A premier educational institution in Delhi, dedicated to fostering academic excellence and holistic development since its inception in 2000.</div>
            <div className='text-center mt-4 md:max-w-[900px]'>Recognized by the CBSE, Springdale Public School offers a nurturing environment where young minds thrive through a balanced blend of modern teaching methodologies and traditional values.</div>
            </div>
            <div className='flex justify-center'>
            <button className='bg-primary h-[43px] w-[105px] rounded-[9px] font-medium text-white mt-[38px] md:hidden'>Know more</button>
            </div>
            <div className='px-[33px] mt-[34px]'>
                <img src="/schoolImage.jpeg" alt="" />
            </div>
            </div>
            <div className='flex justify-center'>
            <button className='bg-primary h-[43px] w-[105px] rounded-[9px] font-medium text-white mt-[38px] hidden md:block'>Know more</button>
            </div>
        </div>
        
        <div className='mt-10 mb-10'><Carousel/></div>
        <div><img className='md:hidden' src="/chairPersonMobile.jpeg" alt="" />
            <img className='hidden md:block' src="/chairPersonDesktop.jpeg" alt="" />
        </div>
        <div className='mb-4'><QuickLinks/></div>
        <div><GalleryGrid/></div>
        <div ref={contactFormRef}><ContactForm  /></div>
        

        
    </div>
  )
}

export default Home
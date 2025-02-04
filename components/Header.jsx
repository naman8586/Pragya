import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-full max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6 '>
      <div className='mb-4 mt-48'>
        <Image src={assets.user_img} alt='Pragya Gaur' className='w-36 h-36 rounded-full object-cover' />
      </div>
      <h3 className='flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I'm Pragya Gaur
        <Image src={assets.hand_icon} alt='' className='w-6' />
      </h3>
      <h1 className='text-3xl sm:text-5xl lg:text-[70px] font-Ovo font-semibold leading-tight'>
        Creative Designer based in Delhi.
      </h1>
      <p className='max-w-2xl mx-auto text-lg font-Ovo mt-4'>
        "Bringing your vision to life through innovative design."
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
        <a 
          href="#contact" 
          className='px-10 py-3 border border-white rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300 ease-in-out flex items-center gap-2'
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </a>
        <a 
          href="/Resume.pdf" 
          download 
          className='px-10 py-3 border border-gray-500 rounded-full text-gray-500 hover:bg-gray-100 transition-all duration-300 ease-in-out flex items-center gap-2'
        >
          My Resume
          <Image src={assets.download_icon} alt='' className='w-4' />
        </a>
      </div>
    </div>
  )
}

export default Header

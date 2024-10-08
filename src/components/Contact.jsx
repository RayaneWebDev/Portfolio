import React from 'react'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import copyright from '../assets/icons/copyright.svg'

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col gap-24 lg:gap-44 px-8 mt-14 lg:mt-0 lg:-translate-y-36'>
      <div className='flex flex-col lg:flex-row gap-20 lg:justify-between items-center'>
        <h1 className='bg-logo-gradient contact text-[28px] lg:text-[52px] font-bold'>Contact Me</h1>
        <p className='text-white text-[14px] lg:text-[17px] font-martianMono'>rayanewebdev7@gmail.com</p>
        <div className='flex gap-8 lg:gap-7'>
          <a className='cursor-pointer' href='https://www.instagram.com/rayane_dev_web?igsh=MWc0aGtsMG9rejRybA=='><img src={instagram} /></a>
          <a className='cursor-pointer' href='https://github.com/RayaneTch'><img src={github} /></a>
          <a className='cursor-pointer' href='https://www.linkedin.com/in/rayane-taouache-28079232a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={linkedin} /></a>
        </div>
      </div>

      <div className='flex gap-5 text-white text-[12px] lg:text-[17px] mx-auto'>
        <p className='flex gap-4'><img src={copyright}/>Designed and developed by</p>
        <p className='bg-logo-gradient contact font-bold'>Rayane Taouache</p>
      </div>
    </section>
  )
}

export default Contact
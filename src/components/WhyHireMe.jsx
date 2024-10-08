import React from 'react'
import checkedIcon from '../assets/icons/checked.svg'

const WhyHireMe = () => {
  return (

    <div>
    <div className="rounded-[50%] opacity-55 inset-0 bg-gradient-to-r from-[rgba(7,35,184,100%)] to-[rgba(7,35,184,100%)] w-[487px] h-[687px] transform translate-y-16 -translate-x-[60%] blur-3xl"></div>
    
    <section className='relative flex flex-col gap-20 lg:gap-32 items-center lg:items-start text-white lg:min-h-[1200px] -translate-y-40'>
    

    
    <h1 className='text-[40px] lg:text-[83px] font-normal tracking-widest text-center whyHireMe bg-logo-gradient lg:ml-[30%]'>Why Hire Me</h1>
      <ul className='flex flex-col pl-[15%] lg:pl-[300px] gap-14 lg:gap-20 font-jaldi'>
          <li className='flex gap-3 lg:gap-8 items-center'>
            <img src={checkedIcon} className='w-[17px] h-[10px] lg:w-[24px] lg:h-[15px]'/>
            <p className='text-[20px] md:text-[24px] lg:text-[28px] font-normal'>High quality work</p>
          </li>

          <li className='flex gap-3 lg:gap-8 items-center'>
            <img src={checkedIcon} className='w-[17px] h-[10px] lg:w-[24px] lg:h-[15px]'/>
            <p className='text-[20px] md:text-[24px] lg:text-[28px] font-normal'>Modern website</p>
          </li>

          <li className='flex gap-3 lg:gap-8 items-center'>
            <img src={checkedIcon} className='w-[17px] h-[10px] lg:w-[24px] lg:h-[15px]'/>
            <p className='text-[20px] md:text-[24px] lg:text-[28px] font-normal'>100% transparency and customer satisfaction</p>
          </li>

          <li className='flex gap-3 lg:gap-8 items-center'>
            <img src={checkedIcon} className='w-[17px] h-[10px] lg:w-[24px] lg:h-[15px]]'/>
            <p className='text-[20px] md:text-[24px] lg:text-[28px] font-normal'>Fast delivery</p>
          </li>

          
      </ul>


      
      </section>
    </div>
  
    
  )
}

export default WhyHireMe
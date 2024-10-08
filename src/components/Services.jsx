import React from 'react'
import servicesIcon from '../assets/icons/services.svg'
import uiuxIcon from '../assets/icons/uiux.svg'
import webdevIcon from '../assets/icons/webdev.svg'
import ecomIcon from '../assets/icons/ecommerce.svg'

const Services = () => {
  return (
    <section id='services' className="flex flex-col gap-8 items-center mt-10 md:pt-44 min-h-[850px]">
        <div className="bg-transparent border border-solid border-gray-300 py-2 px-4 lg:py-3 lg:px-8 flex gap-3 items-center text-white font-martianMono rounded-[21px] text-[10px] lg:text-[20px]">
            <p>Services</p>
            <img src={servicesIcon} alt="services" className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]" />
        </div>

        <h1 className="bg-logo-gradient myAdvantages font-normal text-[34px] lg:text-[76px] tracking-widest">What Can I Do</h1>


        <div className="flex flex-col lg:flex-row gap-6 items-center lg:gap-16 lg:mt-16">

            
           <div className="p-5 pb-8 max-w-[80%] lg:max-w-[393px] border relative text-white rounded-[11px] border-gray border-solid bg-transparent flex flex-col items-center gap-4 mt-10">
              <div className="flex justify-center items-center p-2 bg-white max-w-[40px] absolute -top-5 rotate-45">
                  <img src={uiuxIcon} alt="uiux" className="w-[33px] -rotate-45" />
              </div>
              <h1 className="font-martianMono text-[14px] px-12 mt-6 lg:text-[17px]">UI / UX Design</h1>
  
              <hr className="h-[0.5px] bg-gray w-full" />
  
              <p className="font-inter mt-2 font-normal text-white text-[10px] leading-6 lg:text-[13px]">I craft visually stunning, user-friendly interfaces that merge aesthetics with functionality, enhancing user experience and engagement.</p>
           </div>

          
           
           
           <div className="relative p-5 pb-8 max-w-[80%] lg:max-w-[393px] border text-white rounded-[11px] border-gray border-solid bg-transparent flex flex-col items-center gap-4 mt-10 z-40">
           
           
           <div className="rounded-[50%] opacity-55 absolute inset-0 bg-gradient-to-r from-[rgba(7,35,184,100%)] to-[rgba(7,35,184,100%)] w-[312px] h-[600px] transform -translate-y-40 scale-y-125 md:rotate-90 blur-3xl -z-10"></div>
           

          
            <div className="flex justify-center items-center p-2 py-3 bg-white max-w-[50px] max-h-[50px] absolute -top-6 rotate-45">
                <img src={webdevIcon} alt="uiux" className="w-[27px] -rotate-45" />
            </div>
            <h1 className="font-martianMono text-[14px] px-12 mt-6 lg:text-[17px]">Web Development</h1>

            <hr className="h-[0.5px] bg-gray w-full" />

            <p className="font-inter mt-2 font-normal text-white text-[10px] leading-6 lg:text-[13px]">I build responsive, high-performance websites tailored to your needs, focusing on modern design, seamless functionality, and a user-centric experience.</p>
         </div>

         

         <div className="p-5 pb-8 max-w-[80%] lg:max-w-[393px] border relative text-white rounded-[11px] border-gray border-solid bg-transparent flex flex-col items-center gap-4 mt-10">
            <div className="flex justify-center items-center p-2 bg-white max-w-[40px] absolute -top-5 rotate-45">
                <img src={ecomIcon} alt="uiux" className="w-[33px] -rotate-45" />
            </div>
            <h1 className="font-martianMono text-[14px] px-8 mt-6 lg:text-[17px]">Ecommerce Website</h1>

            <hr className="h-[0.5px] bg-gray w-full" />

            <p className="font-inter mt-2 font-normal text-white text-[10px] leading-6 lg:text-[13px]">I create fully customized, secure, and scalable ecommerce websites, designed to enhance user experience and drive online sales efficiently.</p>
         </div>


        </div>
        

    </section>
  )
}

export default Services
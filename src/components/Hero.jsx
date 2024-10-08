import React from 'react'
import ProfileImg from '../assets/images/portfolioImg.png'
import DownloadIcon from '../assets/icons/download.svg'
const Hero = () => {
  return (
    <section id='home' className="hero flex flex-col lg:flex-row pt-24 lg:pt-36 px-8 items-start gap-16 lg:gap-28">
        <div className="w-full lg:w-1/2 flex justify-center">
            <img src={ProfileImg} alt="profileImg" className="object-cover lg:w-[70%] w-[85%] h-auto lg:-translate-y-20" />
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-7 text-center lg:text-start items-center lg:items-start">
            <h2 className="text-white font-extraBold lg:font-bold text-[14px] lg:text-[36px]">I'm <span className="ml-4 lg:ml-7 text-[26px] lg:text-[56px] name-portfolio bg-name-gradient">Rayane Taouache</span></h2>
            <h4 className="lg:text-[20px] text-[13px] font-extraBold font-martianMono text-fullStackColor">Full Stack Developer</h4>
            <p className="font-jaldi text-white text-[18px] lg:text-[20px] leading-10">I'm a computer science student and full stack developer with a passion for building dynamic web applications. I specialize in both frontend and backend technologies, delivering modern, scalable solutions that enhance user experiences.</p>

            <div className="download border rounded-[14px] border-white p-3">
            <a 
            href={'/src/assets/CV final.pdf'} 
            download="Rayane_Taouache_CV.pdf" 
            className="bg-cv-button p-3 lg:px-5 lg:py-4 rounded-[14px] flex items-center gap-2 text-white shadow-inner-custom backdrop-blur-[14px] hover:shadow-blue-700 hover:drop-shadow-xl"
        >
            <img src={DownloadIcon} alt="download" className="w-5 h-5" />
            <p className="font-martianMono font-extraBold text-[13px] lg:text-[17px]">Download CV</p>
        </a>
           
            </div>
        </div>
    </section>
  )
}

export default Hero
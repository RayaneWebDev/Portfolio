import React from 'react'
import settingsIcon from '../assets/icons/settings.svg'
import htmlIcon from '../assets/icons/html5.svg'
import cssIcon from '../assets/icons/css3.svg'
import jsIcon from '../assets/icons/javascript.svg'
import tailwindIcon from '../assets/icons/tailwind.svg'
import reactIcon from '../assets/icons/react.svg'
import nodeIcon from '../assets/icons/nodejs.svg'
import figmaIcon from '../assets/icons/figma.svg'

const Skills = () => {
  return (
    <section className="flex flex-col gap-5 items-center mt-10 lg:mt-24">
        <div className="bg-transparent border border-solid border-gray-300 py-2 px-4 lg:py-3 lg:px-8 flex gap-3 items-center text-white font-martianMono rounded-[21px] text-[10px] lg:text-[20px]">
            <p>Skills</p>
            <img src={settingsIcon} alt="skills" className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]" />
        </div>

        <h1 className="bg-logo-gradient myAdvantages font-normal text-[34px] lg:text-[76px] tracking-widest">My Advantages</h1>

        <div className="octagon-container">
            <div className="octagon-wrapper"></div>
            <div className="octagon-icons">
                <div className="icon icon1">
                    <img src={htmlIcon} className="w-5 h-5 lg:h-8 lg:w-8" alt="HTML5 Icon" />
                    <p className="text-white font-martianMono text-[12px] hidden">HTML5</p>
                </div>

                <div className="icon icon2">
                    <img src={cssIcon} className="w-5 h-5  lg:w-8 lg:h-8" alt="CSS3 Icon" />
                    <p className="text-white font-martianMono text-[12px] hidden">CSS3</p>
                </div>

                <div className="icon icon3">
                    <img src={jsIcon} className="lg:w-8 lg:h-8 w-5 h-5" alt="JavaScript Icon" />
                    <p className="text-white font-martianMono text-[12px] hidden">JavaScript</p>
                </div>

                <div className="icon icon4">
                    <img src={tailwindIcon} className="w-5 h-5 lg:w-8 lg:h-8" alt="Tailwind Icon" />
                    <p className="text-white font-martianMono text-[12px] hidden">tailwind Css</p>
                </div>

                <div className="icon icon5">
                    <img src={reactIcon} className="w-5 h-5 lg:w-8 lg:h-8" alt="React Icon" />
                    <p className="text-white font-martianMono text-[12px] hidden">React js</p>
                </div>

                <div className="icon icon6">
                    <img src={nodeIcon} className="w-5 h-5 lg:w-8 lg:h-8" alt="NodeJS Icon" />
                    <p className="text-white font-martianMono text-[12px] hidden">Node js</p>
                </div>

                <div className="icon icon7">
                    <div className="flex justify-center items-center w-8 h-8 lg:w-10 lg:h-10 pb-1 border-[1px] border-solid border-white bg-transparent text-white rounded-[50%]">
                        ex
                    </div>

                    <p className="text-white font-martianMono text-[12px] hidden">express js</p>

                </div>

                <div className="icon icon8">
                    <img src={figmaIcon} className="w-5 h-5 lg:w-8 lg:h-8" alt="Figma Icon" />
                    <p className="text-white font-martianMono text-[12px] hidden">Figma</p>
                </div>
                
            </div>
        </div>


    </section>
  )
}

export default Skills
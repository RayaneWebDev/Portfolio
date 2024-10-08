import React from 'react'
import { useState } from 'react'
import CloseIcon from '../assets/icons/close.svg'
import { Link as ScrollLink} from 'react-scroll'

const Header = () => {

    const [menuOpen , setMenuOpen] = useState(false)

    const handleMenuOpen = () => {
        setMenuOpen(true)
    }

    const handleMenuClose = () => {
        setMenuOpen(false)
    }
  return (
    <header className="pt-7 px-9 lg:pt-8 lg:px-28 flex justify-between items-center font-inter">
    <div className="logo text-2xl text-white font-bold lg:text-[35px] bg-logo-gradient">RayaneTch</div>
    <nav className="hidden lg:block">
        <div className="flex items-center gap-24 text-white text-[16px] font-extraBold">
           <ScrollLink to='home' className="hover:border-b-[2px] hover:border-b-fullStackColor transition-all duration-500 ease-in-out hover:text-fullStackColor cursor-pointer">Home</ScrollLink> 
           <ScrollLink to='services' className="hover:border-b-[2px] hover:border-b-fullStackColor transition-all duration-500 ease-in-out hover:text-fullStackColor cursor-pointer">Services</ScrollLink> 
           <ScrollLink to='projects' className="hover:border-b-[2px] hover:border-b-fullStackColor transition-all duration-500 ease-in-out hover:text-fullStackColor cursor-pointer">Projects</ScrollLink> 
           <ScrollLink to='contact' className="hover:border-b-[2px] hover:border-b-fullStackColor transition-all duration-500 ease-in-out hover:text-fullStackColor cursor-pointer">Contact</ScrollLink> 
        </div>
    </nav>
    <svg className="hamburger absolute right-8 cursor-pointer lg:hidden text-white max-h-8 max-w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" onClick={handleMenuOpen}>
        <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" />
    </svg>

    <div className={`${menuOpen ? 'menu-active' : 'menu'} fixed bg-blue-500 right-0 top-0 w-52 pl-8 bottom-0 z-50 flex-col space-y-16 transition-transform duration-[2000ms]`}>
       <img src={CloseIcon} className="close w-6 cursor-pointer ml-32 mt-7" onClick={handleMenuClose} />
        <nav className="flex flex-col space-y-10 font-martianMono">
            <ScrollLink to="home" className="text-white text-lg font-extralight">Home</ScrollLink>
            <ScrollLink to="services" className="text-white text-lg font-extralight">Services</ScrollLink>
            <ScrollLink to="projects" className="text-white text-lg font-extralight">Projects</ScrollLink>
            <ScrollLink to="contact" className="text-white text-lg font-extralight">Contact</ScrollLink>
        </nav>
    </div>
</header>
  )
}

export default Header
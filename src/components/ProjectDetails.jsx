import React from 'react'
import closeIcon from '../assets/icons/icons8-close-50.svg'
import chevronRight from '../assets/icons/chevronright.svg'
import chevronLeft from '../assets/icons/chevronleft.svg'

const ProjectDetails = ({name, images , description , onClose , repoUrl}) => {

    const slideLeft = () => {
        var slider = document.getElementById('sliderDetails');
        slider.scrollLeft = slider.scrollLeft - 500 ;
    }
    
    const slideRight = () => {
        var slider = document.getElementById('sliderDetails');
        slider.scrollLeft = slider.scrollLeft + 500 ;
    }


  return (
    <div id="popup-overlay" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div id="popup" class="bg-white p-6 rounded-lg nax-w-[80%] lg:max-w-[800px] shadow-lg w-full">
                <div class="flex justify-between items-center">
                    <h2 class="text-lg md:text-3xl font-bold">{name}</h2>
                    <img src={closeIcon} alt="close" class="w-6 close cursor-pointer" onClick={onClose}/>

                </div>

                
                <div className='flex flex-col gap-5 mt-4'>
                    <p className='font-jaldi mt-7'><span className='font-bold font-inter mr-2 text-sm lg:text-lg'>Description :</span>{description}</p>

                    <div className='flex flex-col lg:flex-row gap-2'>
                         <p className='font-bold font-inter mr-2 no-underline text-sm lg:text-lg'>Repository URL :</p>
                         <a href={repoUrl} className='underline text-fullStackColor text-sm'>{repoUrl}</a>
                    </div>



                    <div className='relative flex items-center group w-full mt-8'>
                        <img src={chevronLeft} onClick={slideLeft} className='chevronLeft bg-white left-0 rounded-full md:w-8 md:h-8 absolute cursor-pointer z-10' />

                        <div id="sliderDetails" className='overflow-x-scroll flex ml-6 gap-14 lg:gap-20 whitespace-nowrap scroll-smooth scrollbar-hide w-full h-full'>

                        {
                          images.map((image , index) => (
                             <div key={index} className='w-full flex-shrink-0 cursor-pointer relative p-2'>
                                <img className='w-full h-full object-cover' src={image} />

                             </div>
                          ))
                        }
                        
                
            
                
                    </div>
                    
                    <img src={chevronRight} onClick={slideRight} className='chevronRight bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block md:w-8 md:h-8' />
                </div>
                </div>
            </div>
        </div>
  )
}

export default ProjectDetails
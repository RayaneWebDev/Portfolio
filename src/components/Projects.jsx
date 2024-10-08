import React from 'react'
import { useEffect , useState } from 'react';
import chevronRight from '../assets/icons/chevronright.svg'
import chevronLeft from '../assets/icons/chevronleft.svg'
import projectsIcon from '../assets/icons/projects.svg'
import ProjectDetails from './ProjectDetails'

const Projects = () => {

  const [projects, setProjects] = useState([])
  const [projectDetailsOpen, setOpenProjectDetails] = useState(false)
  const [projectSelected , setProjectSelected] = useState(null)
  

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500 ;
}

const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500 ;
}


const handleOpenProjectDetails = (project) => {
    setOpenProjectDetails(true)
    setProjectSelected(project)
}



  useEffect(() => {
    // Fetch the JSON data
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return (
    <section id='projects' className="flex flex-col gap-8 lg:gap-24 mt-16 items-center lg:mt-36">
    <div className="bg-transparent border border-solid border-gray-300 py-2 px-4 lg:py-3 lg:px-8 flex gap-3 items-center text-white font-martianMono rounded-[21px] text-[10px] lg:text-[20px]">
        <p>Projects</p>
        <img src={projectsIcon} alt="projects" className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]" />
    </div>

    <h1 className="bg-logo-gradient myAdvantages font-normal text-[34px] lg:text-[76px] tracking-widest">Portfolio</h1>


    <div className='relative flex items-center group w-full mt-8 lg:mt-14'>
        <img src={chevronLeft} onClick={slideLeft} className='chevronLeft bg-white left-0 rounded-full md:w-8 md:h-8 absolute cursor-pointer z-10' />
        
        <div id="slider" className='overflow-x-scroll flex ml-11 lg:ml-24 gap-14 lg:gap-44 whitespace-nowrap scroll-smooth scrollbar-hide relative w-full h-full'>

        {
          projects.map((project , index) => (
            <div key={index} className='w-[270px] md:w-[70%] lg:w-[40%] flex-shrink-0 cursor-pointer relative p-2'>
            <img className='w-full h-full object-cover' src={project.images[0]} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white flex items-center justify-center'>
                <div className="flex flex-col items-center space-y-3 lg:space-y-6 mt-[15%]">
                    <p className='white-space-normal font-martianMono text-xs md:text-sm lg:text-3xl font-bold tracking-widest flex justify-center h-full text-center items-center'>
                        {project.name}
                    </p>

                    <button className="font-inter bg-white rounded-xl py-2 px-3 text-[10px] md:text-lg lg:text-[14px] lg:px-5 lg:py-1 flex justify-center text-black items-center w-fit hover:bg-cv-button hover:shadow-inner-custom hover:backdrop-blur-[14px] hover:bg-current" onClick={() => handleOpenProjectDetails(project)}>View Details</button>
                </div>
                
            </div>
        </div>
          ))
        }
            
    

    
        </div>
        
        <img src={chevronRight} onClick={slideRight} className='chevronRight bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block md:w-8 md:h-8' />
    </div>

    {
      projectDetailsOpen && 


    (  <ProjectDetails description={projectSelected?.description} images={projectSelected?.images} name={projectSelected?.name} repoUrl={projectSelected?.github} onClose={() => setOpenProjectDetails(false)}/> )
    }


    
</section>
  )
}

export default Projects
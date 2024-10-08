import React from 'react'

const GetTouch = () => {
  return (
    <form action="https://formspree.io/f/mgvwjqjp" method="POST" className='p-7 bg-getInTouchColor flex flex-col container mx-auto w-[80%] lg:w-[712px] lg:-translate-y-96 rounded-xl'>

      <h1 className='text-white font-martianMono text-[18px] lg:text-[32px] mb-7 font-bold'>Get In Touch !</h1>

      <div className='flex flex-col gap-7 text-fullStackColor'>
         <input 
         name='name'
         className='bg-transparent border-b-2 border-labelColor focus:outline-none focus:border-fullStackColor caret-fullStackColor placeholder-labelColor py-2 font-inter' 
         type='text' 
         placeholder='Enter your name' 
       />

          <input 
         name='email'
         className='bg-transparent border-b-2 border-labelColor focus:outline-none focus:border-fullStackColor caret-fullStackColor placeholder-labelColor py-2 font-inter' 
         type='email' 
         placeholder='Enter your email' 
       />
     
       <label className='text-labelColor font-inter'>Enter your message</label>
       <textarea name='message' className='bg-textarea h-[120px] focus:outline-fullStackColor focus:border-fullStackColor caret-fullStackColor p-3 rounded-xl text-[14px] '></textarea> 

       <button className='bg-white flex justify-center items-center text-black font-extraBold py-4 rounded-xl'>Send</button>
         
       
      </div>
      
    
    </form>
  )
}

export default GetTouch
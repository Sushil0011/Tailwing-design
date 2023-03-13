import React from 'react'
import image from '../assest/image.svg'
const Mid = () => {
  return (
    <>

    <div className='bg-blue-500 md:flex md:flex-row px-[30px] py-[30px]  flex  flex-col items-center justify-center gap-[8rem]  '>
        <div className='md:w-[30%] w-[95vw]'   > <img src={image} alt=""/></div>
        <div  className='flex flex-col gap-[2rem]  md:w-[400px] w-[100vw] py-[20px] px-[30px] items-center md:items-start
         '><h2  className='md:text-4xl text-2xl font-bold text-lime-400'>Learn from Experts</h2>
        <p className=' text-[15px]  md:text-[20px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sed, repellendus 
            amet error enim esse alias dolorum aspernatur, sapiente vitae architecto
            quisquam inventore voluptas facere.</p>
            <button  className='bg-black px-[30px] w-[150px]  text-white py-[10px]'>Get Started</button>
        </div>
    </div>
    </>
  )
}

export default Mid
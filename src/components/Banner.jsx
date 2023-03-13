import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div  className='bg-blue-500  py-[150px] w-screen h-screen ' >
        <div className='mx-auto w-screen md:[50vw]  flex  gap-[20px] md:gap-[3rem] flex-col items-center  mt-[5rem]'>
            <h3 className='text-2xl font-bold  md:text-5xl'>Learn with us</h3>
            <h3 className='text-4xl font-bold md:text-[4rem] text-white'> Grow with us</h3>

            <Typed  className='text-[1.5rem] font-medium  text-black   md:text-[3rem]  md:text-white'
                    strings={['Frontend Development']}
                    typeSpeed={100}
                    backSpeed={50}
                    loop={true}
                />
<button  className='py-[10px] px-[30px] bg-black rounded text-white'>Get Started</button>
        </div>
    </div>
  )
}

export default Banner
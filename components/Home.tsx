import React from 'react'
import Image from 'next/image'
// import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { TiArrowUpThick } from "react-icons/ti";
import { FaFire } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";





type Props = {}

const HomeComponent = (props: Props) => {
  return (
      <main className='bg-zinc-900'>
      <section className='h-[90vh] flex flex-col gap-5 justify-center items-center px-10 text-center'>
            {/* <Image src={"/vercel.svg"} alt='Image' width={100} height={24}></Image>
             */}
        <GiBrain className='text-white' fontSize={200} />
          <h1 className='text-white font-bold text-[3rem] sm:text-[4.2rem]'>
              Improve Your Knowledge and ace your quizzes
          </h1>
      </section>
      <section className='w-full flex flex-col sm:flex-row justify-around gap-2  md:items-center bg-red-600 min-h-[20vh] py-10 px-3'>

        <div className='flex gap-2 items-center justify-around px-1 py-6 border-2 border-white'>
          <FaThumbsUp fontSize={40} className='text-white w-[30%]' />
          <div className='flex flex-col gap-2'>
            <h1 className='text-lg md:text-2xl text-white font-extrabold'>Quiz Success</h1>
            <p className=' text-[1rem] text-white'>Unlock Inner knowledge and excel in your quiz-taking skills</p>

          </div>
        </div>
        <div className='flex gap-2 items-center justify-around px-1 py-6 border-2 border-white'>
          <TiArrowUpThick fontSize={40} className='text-white w-[30%]' />
          <div className='flex flex-col gap-2'>
            <h1 className='text-lg md:text-2xl text-white font-extrabold'>Improved Learning</h1>
            <p className=' text-[1rem] text-white'>Unlock Inner knowledge and excel in your quiz-taking skills</p>

          </div>
        </div>
         <div className='flex gap-2 items-center justify-around px-1 py-6 border-2 border-white'>
          <FaFire fontSize={40} className='text-white w-[30%]' />
          <div className='flex flex-col gap-2'>
            <h1 className='text-lg md:text-2xl text-white font-extrabold'>Less Pressure</h1>
            <p className=' text-[1rem] text-white'>Unlock Inner knowledge and excel in your quiz-taking skills</p>

          </div>
        </div>
        {/* <TiArrowUpThick  fontSize={70} className='text-white'/>
        <FaFire fontSize={70} className='text-black'/> */}

      </section>
    </main>
  )
}

export default HomeComponent
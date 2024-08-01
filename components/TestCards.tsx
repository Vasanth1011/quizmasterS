import React from 'react'
import Link from 'next/link';
import { FaJava,FaPython,FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


type Props = {}

const TestCards = (props: Props) => {
    // const cardData = 
    return (
      <>
     
      <main className='bg-zinc-700 p-4'>
         <h1 className='text-[2rem] text-white font-extrabold'>Take Test</h1>
      
        <section className='grid grid-cols-1 sm:grid-cols-3 p-5 gap-3'>
          
          <Link
              className='p-10 rounded-md flex gap-3 flex-col items-center justify-center bg-zinc-900'
              href={{
                  pathname: "/test/java",
           }}>
          <FaJava size={100} 
          className='text-white'/>
          <p className='text-white font-bold text-lg'>Java</p>
          </Link>
          <Link
               className='p-10 rounded-md flex flex-col gap-3 items-center justify-center bg-zinc-900'
              href={{
                  pathname: "/test/javascript",
           }}>
       <IoLogoJavascript size={100} 
       
       className='text-white'/>
       <p className='text-white font-bold text-lg'>JavaScript</p>
          </Link>
          <Link
               className='p-10 rounded-md flex flex-col gap-3 items-center justify-center bg-zinc-900'
              href={{
                  pathname: "/test/python",
           }}>
          <FaPython size={100} className='text-white'/>
          <p className='text-white font-bold text-lg'>Python</p>
          </Link>
          <Link
               className='p-10 rounded-md flex flex-col gap-3 items-center justify-center bg-zinc-900'
              href={{
                  pathname: "/test/php",
           }}>
          <FaPhp size={100} className='text-white' />
          <p className='text-white font-bold text-lg'>Php</p>
          </Link>
            </section>
      </main>
      
     </>
  )
}

export default TestCards
import React from 'react'
// import Home from '@/components/Home'
import HomeComponent from '@/components/Home'
import TestCards from '@/components/TestCards'
// import { auth } from "@/auth";
import { AppWrapper } from '@/context'
import { QuestionContext, QuestionContextProvider } from '@/context/QuestionContext'


const Home = async () => {
  // const session = await auth();
  // console.log(JSON.stringify(session)) 
  return (
    // <div>Home</div>
    <main className='mt-[10vh] '>
        <HomeComponent />
        <TestCards />      
    </main>
   
  )
}

export default Home
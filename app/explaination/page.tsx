"use client"
export const dynamic = 'force-dynamic'
import { useQuestionStore } from '@/store/store'
import React from 'react'



type Props = {}

const Explaination = (props: Props) => {
  const questionsContextData = useQuestionStore((state) => state.questions);
    // useEffect(() => {
    //     setQuestion("surieya")
  // },[])
  console.log(questionsContextData)
  return (
    <>
    </>
    //   <div className="text-black mt-[10vh]">
    //   {question}
    //   <button className='text-black' onClick={() => setQuestion("Sameer Rizvi")}>
    //      Click
    //    </button>
    // </div>
  )
}


// const Explain = () => {
//   return (
// }

export default Explaination
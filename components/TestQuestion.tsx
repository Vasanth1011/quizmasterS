"use client"
import { ChangeEvent, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { CodeBlock } from 'react-code-block'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { RadioGroupDemo } from './RadioGroupDemo'
import { Question } from '@/types'
import {  useAppContext } from '@/context'
import { QuestionContext } from '@/context/QuestionContext'
import { useQuestionStore, useScoreStore } from '@/store/store'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from './ui/button'
import { boolean } from 'zod'
import { useRouter } from 'next/navigation'
// import { Label } from '@radix-ui/react-label'

const TestQuestion = ({ questions }: { questions: Question[] }) => {
  // const context = useAppContext();
   
  

  
  return (
      // <div>TestQuestion</div>
      //   <Component />
    <Carosel questions={questions}  />
  )
}

export default TestQuestion








// const questions = [
//   {
//     id: 14,
//     code: "text",
//     language: "text",
//     options: ["true", "false"],
//     correctOption: "1",
//     explanation: `All objects have prototypes, except for the base object. The base object is the object created by the user, or an object that is created using the new keyword. The base object has access to some methods and properties, such as .toString. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.`,
//   },
//   {
//     id: 15,
//     code: `
// function sum(a, b) {
//   return a + b;
// }

// sum(1, '2');
// `,
//     language: "javascript",
//     options: ["NaN", "TypeError", "\"12\"", "3"],
//     correctOption: "2",
//     explanation: `JavaScript is a dynamically typed language: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called implicit type coercion. Coercion is converting from one type into another.

// In this example, JavaScript converts the number 1 into a string, in order for the function to make sense and return a value. During the addition of a numeric type (1) and a string type ('2'), the number is treated as a string. We can concatenate strings like "Hello" + "World", so what's happening here is "1" + "2" which returns "12".`,
//   },
//   {
//     id: 16,
//     code: `
// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);
// `,
//     language: "javascript",
//     options: ["1 1 2", "1 2 2", "0 2 2", "0 1 2"],
//     correctOption: "2",
//     explanation: `The postfix unary operator ++:

// - Returns the value (this returns 0)
// - Increments the value (number is now 1)

// The prefix unary operator ++:

// - Increments the value (number is now 2)
// - Returns the value (this returns 2)

// This returns 0 2 2.`,
//   },
//   {
//     id: 17,
//     code: `
// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = 'Lydia';
// const age = 21;

// getPersonInfo\`\${person} is \${age} years old\`;
// `,
//     language: "javascript",
//     options: [
//       "\"Lydia\" 21 [\"\", \" is \", \" years old\"]",
//       "[\"\", \" is \", \" years old\"] \"Lydia\" 21",
//       "\"Lydia\" [\"\", \" is \", \" years old\"] 21",
//     ],
//     correctOption: "1",
//     explanation: `If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!`,
//   },
//   {
//     id: 18,
//     code: `
// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log('You are an adult!');
//   } else if (data == { age: 18 }) {
//     console.log('You are still an adult.');
//   } else {
//     console.log(\`Hmm.. You don't have an age I guess\`);
//   }
// }

// checkAge({ age: 18 });
// `,
//     language: "javascript",
//     options: [
//       "\"You are an adult!\"",
//       "\"You are still an adult.\"",
//       "\"Hmm.. You don't have an age I guess\"",
//     ],
//     correctOption: "2",
//     explanation: `When testing equality, primitives are compared by their value, while objects are compared by their reference. JavaScript checks if the objects have a reference to the same location in memory.

// The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.

// This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false.`,
//   },
// ]



const Carosel = ({ questions }: { questions: Question[] }) => {
  

  const [index, setIndex] = useState(0);
  const session = useSession()
  const score = useScoreStore((state) => state.score);
  const scoreToZero = useScoreStore((state) => state.setScoreToZero);
  const router = useRouter();

  useEffect(() => {
    scoreToZero();
  },[scoreToZero])

  async function handleFinish() {
     try {
       const res = await fetch('/api/test', {
         method: "POST",
         headers: {
           'Content-Type':'application/json'
         },
         body: JSON.stringify({
           name: session.data?.user?.name,
           email: session.data?.user?.email,
           score: score,
           language:questions[0]?.language,
         })
       })
       router.push("/dashboard")

     } catch (err:any) {
       console.log(err);
     }
  }
 
  function handleClick(dir:"right"|"left") {
    console.log(dir);
    if (dir === "right") {
      setIndex((prev) => (prev < questions.length ? prev + 1 : 0));
    } else {
      setIndex((prev) => (prev > 0 ? prev - 1 : questions.length));
    }
  }
    return (
        <section className='flex flex-row w-full mt-[10vh] h-auto overflow-y-scroll'>
            <main className="carosel w-full min-h-[90vh] h-auto bg-slate-900 flex items-center"  >
          <>
           <button className='text-black bg-white p-2 rounded-md absolute top-8 right-4 z-10' onClick={handleFinish}> Finish</button>
             <div
        className="arrow"
        style={{ left: "10px" }}
        onClick={() => handleClick("left")}
      >
        <BsChevronLeft className="w-6 text-white md:w-auto" />
      </div>
                
      <div
        className="wrapper"
        style={{ transform: `translateX(${index * -100}vw)` }}
      >
        {questions.map((question) => (
          <SingleCard key={question.id} question={question} />
        ))}
    </div>
                
      <div
        className="arrow"
        style={{ right: "10px" }}
        onClick={() => handleClick("right")}
      >
        <BsChevronRight className="w-6 text-white md:w-auto" />
      </div>
          </>
    </main>
      </section>
  )
};


const SingleCard = ({ question }: {
  question:Question
}) => {
  
  const [showExplaination, setShowExplaination] = useState(false)
  const [answer, setAnswer] = useState<string>()
  const score = useScoreStore((state) => state.score)
  const setScore = useScoreStore((state) => state.setScore)


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e?.target?.value);
    setAnswer(e?.target?.value);
  }

  const handleSubmit = () => {
    const optionNumber = Number(question.correctOption);
    const correctOption = question.options[optionNumber];
    if (correctOption.text === answer) {
       setScore()
      console.log({ correctOption, answer, showExplaination, score })
    }
    setShowExplaination(true);
  }


  useEffect(() => {
    console.log(score)
  },[score])

  return (
      <div className="w-[100vw] h-auto flex flex-col items-center justify-center shadow-md shadow-white py-5 min-h-[80vh]" key={question.id}>
      <>
        <h1 className='text-3xl text-white'> Your Score {score} / 5</h1>
           <p className='text-white'>Guess the output</p>
           <CodeBlock key={question.id} code={question.code} language={question.language}>
                <CodeBlock.Code className="bg-gray-900 p-6 rounded-xl w-[80%]">
                  <div className="table-row">
                    <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
                    <CodeBlock.LineContent className="table-cell">
                      <CodeBlock.Token />
                    </CodeBlock.LineContent>
                  </div>
                </CodeBlock.Code>
            </CodeBlock>
            </>
            <div className={'flex flex-col items-center gap-3 w-[80%]'}>
        <div className="border-2 p-4 w-[80%] text-white shadow-md shadow-white rounded-md flex justify-center gap-3 flex-col" >
          
       
      {
        question.options.map((option) => (
          <div className="flex items-center gap-3 " key={option.id}>
        <input value={option.text} id={option.id.toString() } name="radio-btns" type='radio' className="border-2 border-white text-white" onChange={(e) => handleChange(e)}/>
            <Label htmlFor={option.id.toString()} >{option.text}</Label>
      </div>
        ))
      }
          {!showExplaination && (
             <Button className='bg-white text-black w-[100%]' onClick={handleSubmit}>Submit</Button> 
         )}
        </div>
        {showExplaination && (
            <div className={"block p-5 text-white flex-col items-center justify-center border-2 border-white w-[80%]"}>

          <h1>Correct Option: {question.correctOption}</h1>
          <div>
              {question.explanation}
                 </div>
               </div>
        )}
            </div>
          </div>
  )
}
"use client"
import { createContext, useState, useEffect } from "react"


type ContextProps = {
    question: string
    setQuestion: React.Dispatch<React.SetStateAction<string>>
}

export const QuestionContext = createContext<ContextProps>({} as ContextProps)


export const QuestionContextProvider = ({ children }: {
    children:React.ReactNode
}) => {
    const [question, setQuestion] = useState<string>("");
    useEffect(() => {
        console.log(question);
    },[])
      
    return (
        <QuestionContext.Provider value={{question,setQuestion}}>
            {children}
        </QuestionContext.Provider>
    )
}

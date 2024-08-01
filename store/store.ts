import { create } from "zustand"
import { Question } from "@/types"

type QuestionStore = {
    questions: Question[]
    score: number
    setQuestions: (questions: Question[]) => void
    // setScore: (score: number) => void
}

//  setQuestion: (question: Question) => set((state: any) => ({
//         questions: [...state.questions, question]
//     })),


// export const useQuestionStore = create<QuestionStore>((set) => ({
//     questions: [],
//     score: 0,
//     setQuestions: (questions: Question[]) => { },
//     setScore: (score: number) => { },
// }))

export const useQuestionStore = create<QuestionStore>((set) => ({
    questions: [],
    score: 0,
    setQuestions: (questions: Question[] ) => set((state:QuestionStore) => ({
        questions: [...state.questions, ...questions]
    }))

}))

type scoreStore = {
    score: number,
    setScore: () => void
    setScoreToZero :() => void
}


export const useScoreStore = create<scoreStore>((set) => ({
    score: 0,
    setScore: () => set((state) => ({
        score: state.score + 1
    })),
    setScoreToZero: () => set((state) => ({
        score:0
    }))
}))
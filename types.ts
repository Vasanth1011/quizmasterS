// export default QuestionOption = {
//   id: number;
//   text: string;
//   questionId: number;
// };

// type Question = {
//   id: number;
//   question: string;
//   code: string;
//   language: string;
//   correctOption: string;
//   explanation: string;
//   options: QuestionOption[];
// }


// types.ts

export type QuestionOption = {
  id: number;
  text: string;
  questionId: number;
};

export type Question = {
  id: number;
  question: string;
  code: string;
  language: string;
  correctOption: string;
  explanation: string;
  options: QuestionOption[];
};


export type ContextType = {
  // correctOptions: string[],
  problem:any[],
  // options: string[],
  score: number,
  // accuracy: number
  // testType:string
}
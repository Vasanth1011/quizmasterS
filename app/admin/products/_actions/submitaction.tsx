"use server"
import { formSchema } from "./utils/zodSchema"
import db from "@/db/db"
export type formState = {
   message:string
}
export const onSubmitAction = async (data:FormData) : Promise<formState> => {
   console.log(data)
   // const formData = Object.fromEntries(data);
   // const parsed = formSchema.safeParse(formData);
    const result = formSchema.safeParse(Object.fromEntries(data.entries()))

   const inputData = result.data
   console.log(inputData)
   if (!result.success) {
      return {
         message: "Invalid form data"
      }
   }
      
      // const inputData = {
      //    question: formData.question,
      //    code: formData.code,
      //    language: formData.language,
      //    correctOption: formData.correctOption,
      //    options: {
      //       create: [
      //          {text:formData.optionA},
      //          {text:formData.optionB},
      //          {text:formData.optionC},
      //          {text:formData.optionD}
      //       ]
      //    }
      // }

      const question = await db.question.create({
         data: {
            question: result.data.question,
            code: result.data.code,
            language: result.data.language,
            correctOption: result.data.correctOption,
            explanation:result.data.explaination,
            options: {
               create: [
                  { text: result.data.optionA },
                  { text: result.data.optionB },
                  { text: result.data.optionC },
                  { text: result.data.optionD }
               ]
            }
         }
      })

   return {
      message:"success"
}
   
}


import { z } from "zod"


export const formSchema = z.object({
  question: z.string().min(2, {
    message: "Please Provide the question",
  }),
    code: z.string().min(2, {
       message:"Please provide the code"
    }),
    language:z.enum(["javascript","java","python","php"]),
    optionA: z.string().min(1, {
      message:"Option A should be atleast of 2 characters,"
  }),
     optionB: z.string().min(1, {
      message:"Option B should be atleast of 2 characters,"
     }),
       optionC: z.string().min(1, {
      message:"Option C should be atleast of 2 characters,"
       }),
         optionD: z.string().min(1, {
      message:"Option D should be atleast of 2 characters,"
         }),
  correctOption: z.enum(["0", "1", "2", "3"]),
  explaination: z.string().min(10, {
      message: "Please provide the explaination",
    })
   
})
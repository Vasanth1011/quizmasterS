"use client"
import React, { useState} from 'react'
import { onSubmitAction } from "../_actions/submitaction"
import { Textarea } from '@/components/ui/textarea'

import { Editor } from '@monaco-editor/react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm} from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from '../_actions/utils/zodSchema'




export default function Forms() {
    const [lang, setLang] = useState<string>("javascript");
    // const formRef = useRef<HTMLFormElement>(null);
    // const [state, formAction] = useFormState(onSubmitAction, {
    //     message:"",
    // })
    // const handleChange = (e) => {
      
    // }

    const onSubmit = async(data: z.output<typeof formSchema>) => {
        const formData = new FormData();
        formData.append("question", data.question);
        formData.append("code", data.code);
        formData.append("language", data.language);
        formData.append("optionA",data.optionA)
        formData.append("optionB",data.optionB)
        formData.append("optionC",data.optionC)
        formData.append("optionD", data.optionD)
        formData.append("correctOption", data.correctOption)
        formData.append("explaination",data.explaination)
        

        console.log(await onSubmitAction(formData))
    }
    
    const form = useForm<z.output<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            question: "",
            code: "",
            language: undefined,
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctOption: "0",
            explaination:""
        },
    })


        return (
            <main className='flex items-center justify-center w-full bg-zinc-900 pt-5'>
                <Form {...form} >
                     {/* {state?.message !== "" && (
                    <div className='danger'>{state.message}</div>
                )} */}
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 mt-[10vh] w-[80%] bg-zinc-800 shadow-md shadow-white px-5 py-5">
                    <FormField
                        control={form.control}
                        name="question"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-gray-500'>Question</FormLabel>
                                <FormControl>
                                    <Input placeholder="Question" className='bg-zinc-700 text-zinc-300' {...field} />
                                </FormControl>
                                <FormDescription>
                                   Post your Question here
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-gray-500'>Language</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Valid Language" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='bg-zinc-700 text-zinc-300'>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="javascript">Javascript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="php">PHP</SelectItem>
                  
                </SelectContent>
              </Select>
              <FormDescription>
                Select A Valid Language{" "}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
                        />
                        <div className='flex flex-row w-full justify-around gap-4'>
                            <FormField
                        
                        control={form.control}
                        name="optionA"
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel className='text-gray-500'>Option A</FormLabel>
                                <FormControl>
                                    <Input placeholder="Option A"  className='bg-zinc-700 text-zinc-300' {...field} />
                                </FormControl>
                                <FormDescription>
                                    Provide Option A
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="optionB"
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel className='text-gray-500'>Option B</FormLabel>
                                <FormControl>
                                    <Input placeholder="Option B"  className='bg-zinc-700 text-zinc-300' {...field} />
                                </FormControl>
                                <FormDescription>
                                    Provide Option B
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />         
                        </div>
                        
                    
                        <div className='flex flex-row w-full justify-around gap-4'>
                          <FormField
                        control={form.control}
                        name="optionC"
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel className='text-gray-500'>Option C</FormLabel>
                                <FormControl>
                                    <Input placeholder="Option C"  className='bg-zinc-700 text-zinc-300' {...field} />
                                </FormControl>
                                <FormDescription>
                                    Provide Option C
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="optionD"
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel className='text-gray-500'>Option D</FormLabel>
                                <FormControl>
                                    <Input placeholder="Option D"  className='bg-zinc-700 text-zinc-300' {...field} />
                                </FormControl>
                                <FormDescription>
                                    Provide Option D
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />      
                </div>
                
                    <FormField
                        control={form.control}
                        name="correctOption"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-gray-500'>Correct Option</FormLabel>
                                <FormControl>
                                    <Input placeholder="Correct Option"  className='bg-zinc-700 text-zinc-300' {...field} />
                                </FormControl>
                                <FormDescription>
                                    Provide Correct Option in Terms of Index 0 = A, 1 | 2 | 3
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                        /> 
                        
                        
                    <FormField
                        control={form.control}
                        name="explaination"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-gray-500'>Explaination</FormLabel>
                                <FormControl>
                                    <Textarea placeholder='Type your Explaintion here' className='bg-zinc-700 text-white' {...field} />
                                </FormControl>
                                <FormDescription>
                                   Provide Explaination Please
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> 

                      <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-gray-500'>Write The code Here</FormLabel>
                                <FormControl>
                                    
                     <Editor
                        height="50vh"
                        defaultLanguage="java"
                        value={field.value}
                        onChange={field.onChange}
                        language={lang}
                        theme="vs-dark"
                    />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )} />
                    
        <Select onValueChange={(value) => setLang(value) }>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Language" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="java">Java</SelectItem>
    <SelectItem value="javascript">Javascript</SelectItem>
    <SelectItem value="python">Python</SelectItem>
    <SelectItem value="php">PHP</SelectItem>
                            
  </SelectContent>
         </Select>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
           </main>
        )
    }


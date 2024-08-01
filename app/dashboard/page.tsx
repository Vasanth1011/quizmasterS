import React from 'react'
import SimpleCharts from './_components/SimpleCharts'
import { auth } from '@/auth';
import db from '@/db/db';


type Props = {}

const getData = async (email: string | null | undefined) => {
  try {
    if (email != undefined && email != null) {
       const result = await db.tests.findMany({
            where: {
        email: email
                  },
                  orderBy: {
                      createdAt: 'desc'
                  },
                  select: {
                      id: true,
                      name: true,
                      email: true,
                      testScore: true,
                      language: true,
                      createdAt:true
                  }
              })
        console.log(result)
        return result;
    }
      
   } catch (error) {
    console.log(error);
   }

}

const page = async(props: Props) => {
  const session = await auth();
  
    if (session && session.user) {
        session.user = {
            name: session.user.name,
            email: session.user.email,
        };
      }
  const data = await getData(session?.user?.email)

 
  return (
      <SimpleCharts data={data} />
  )
}












export default page
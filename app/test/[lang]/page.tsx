import { SessionProvider } from 'next-auth/react'
import TestQuestion from '@/components/TestQuestion'
import db from '@/db/db'
import { revalidatePath, unstable_noStore } from 'next/cache'
import { auth } from '@/auth'





const Test = async ({ params }: {
  params: { lang: string }
}) => {


  async function getData() {
    const questionIds = await db.question.findMany({
  where: {
    language: params.lang // Replace with your specific language
  },
  select: {
    id: true
  }
});
  const shuffleArray = (questionIds:number[]) => questionIds.sort(() => Math.random() - 0.5);
const shuffledIds = shuffleArray(questionIds.map(q => q.id)).slice(0,5);

const randomQuestions = await db.question.findMany({
  where: {
    id: {
      in: shuffledIds
    }
  },
  include: {
    options: true
  }
});
    revalidatePath(`/lang/${params.lang}`);
    
    return randomQuestions
}


  unstable_noStore();




 const session = await auth();
    if (session && session.user) {
        session.user = {
            name: session.user.name,
            email: session.user.email,
        };
    }
    // console.log(session)
  const randomQuestions = await getData();
console.log(randomQuestions);
  // console.log(questions)
  return (

    <SessionProvider session={session}>
         <TestQuestion questions={randomQuestions} />
        </SessionProvider>

 
  )
}

export default Test
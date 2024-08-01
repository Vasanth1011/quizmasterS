import { NextRequest, NextResponse } from "next/server";
import db from "@/db/db";

export async function GET(request: NextRequest) {
    
  console.log(request);
    try {
          const questionIds = await db.question.findMany({
  where: {
    language:"java"
  },
  select: {
    id: true
  }
});

const shuffleArray = (questionIds:number[]) => questionIds.sort(() => Math.random() - 0.5);
const shuffledIds = shuffleArray(questionIds.map(q => q.id)).slice(0,2);

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
      
      return NextResponse.json({
        randomQuestions
      })
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:400})
    }
}
import { NextRequest, NextResponse } from "next/server";
import db from "@/db/db";




export async function GET(request: NextRequest) {
    // console.log(request)
    try {
        const query = request.nextUrl.searchParams
        const email = query.get("email");
        if (email != null) {
              const result = await db.tests.findMany({
            where: {
                email:email
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
        return NextResponse.json({
            result
        })
        }
        return NextResponse.json({
            message:"url MisMatch"
        })
        
    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        },{status:500})
    }
}

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {name,email,score,language } = reqBody;
        console.log(reqBody);


        const res = await db.tests.create({
            data: {
                name: name,
                email: email,
                testScore: score,
                language:language
            }
        })

        return NextResponse.json({
            message:"create Successfully"
        })

        // const user = await User.findOne({
        //     verifyToken: token,
        //     verifyTokenExpiry:{$gt:Date.now()}
        // })

        // if (!user) {
        //     return NextResponse.json({error:"Invalid token"},{status:400})
        // }
        // console.log(user);
        // user.isVerified = true;
        // user.verifyToken = undefined;
        // user.verifyTokenExpiry = undefined;
        // await user.save()

        // return NextResponse.json({
        //     message: "Email Verified",
        //     success:true
        // })
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({
            error:error.message
        },{status:500})
    }
}
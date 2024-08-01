// import React from 'react'
"use client";
import { useSession } from "next-auth/react"
import { Button } from "./ui/button"
import { signIn, signOut } from "@/auth/helpers";
import { useRouter } from "next/navigation"



export default function AuthButton(){
    const session = useSession();
    const router = useRouter();
    // console.log(session)
    return session.data?.user ? (
        <Button onClick={async () => {
            await signOut()
            router.refresh();
        }}>
        {session.data.user.name}:Sign Out
     </Button>
    ) : (
            <Button onClick={async () => {
                await signIn()
                
            }}>Sign In</Button>
    )

}

"use client"
import { useSession } from 'next-auth/react';
import React from 'react'
import { Button } from './ui/button';
import { signIn, signOut } from '@/auth/helpers';



const AuthBtn = () => {
    const session = useSession();


    return session.data?.user ? (
        <Button onClick={async () => {
            await signOut()
        }}>
        {session.data.user.name}:Sign Out
     </Button>
    ) : (
            <Button onClick={async() => await signIn()}>Sign In</Button>
    )
  
}

export default AuthBtn;
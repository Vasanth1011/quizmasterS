import { SessionProvider } from "next-auth/react";
import { BASE_PATH,auth } from "@/auth";
import AuthButtonClient from "./AuthButton.client";
// import AuthBtn from "./AuthBtn";

export default async function AuthServerButton() {
    const session = await auth();
    if (session && session.user) {
        session.user = {
            name: session.user.name,
            email: session.user.email,
        };
    }
    console.log(session)
    return (
        <SessionProvider basePath={BASE_PATH} session={session}>
            <AuthButtonClient />
        </SessionProvider>
    )
}


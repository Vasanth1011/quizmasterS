import { NextResponse } from 'next/server'
import {auth,BASE_PATH} from "@/auth"
 
// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url))
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }

const trustedHosts = ['localhost', 'yourproductiondomain.com'];

export default auth((req) => {
  const reqUrl = new URL(req.url);
      if (!trustedHosts.includes(reqUrl.hostname)) {
        return NextResponse.redirect(new URL(`${BASE_PATH}/untrusted-host`, req.url));
    }
    if (!req.auth && reqUrl?.pathname !== "/") {
        return NextResponse.redirect(
            new URL(`${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(reqUrl.pathname)}`, req.url)

        )

    }
})


export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
"use client"

import { SessionProvider } from "next-auth/react"

const S_Provider = ( { children }: any) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default S_Provider
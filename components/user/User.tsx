'use client'

import { useSession } from "next-auth/react"

const CurrentUs = () => {

    const { data: session } = useSession()

  return (
    <div>
        {JSON.stringify(session)}
    </div>
  )
}

export default CurrentUs
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prismadb from "@/lib/prismadb";

export async function getSession() {
    return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
    try {
        const session = await getSession()

        if(!(session as any)?.user?.email) return null

        const user = await prismadb.user.findUnique({
            where: {
                email: (session as any)?.user?.email as string
            }
        })

        if(!user) return null

        return user

    } catch (error: any) {
        console.log(error)
        return null;
    }
}
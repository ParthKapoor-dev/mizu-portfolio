import prismadb from '@/lib/prismadb'
import bcrypt from 'bcrypt'

export async function POST(req: Request) {

  const body = await req.json()

  const { name, email, password, accountType } = body
  console.log(accountType)
  try {
    const alreadyExists = await prismadb.user.findUnique({ where: { email: email}})
    if(alreadyExists) {
      return new Response(JSON.stringify({ "status": "500", "error": "user already exists"}))
    }
    else {
      const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await prismadb.user.create({
          data: {
            name,
            email,
            hashedPassword,
            userType: accountType,
          }
        })
        console.log(newUser)
      return new Response(JSON.stringify({ "status": "200", "success": "Successfully registered"}));
    }
  } catch (error) {
    console.log(error)
  }
}
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  session: { strategy: 'jwt' },
  secret: 'killyourguts2025',
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Your Username',
          type: 'text',
          placeholder: 'type username'
        },
        password: {
          label: 'Your Password',
          type: 'password',
          placeholder: 'type password'
        }
      },
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string
          password: string
        }
        if (username === 'testuser' && password === 'testpass') {
          return {
            id: 'US001',
            username
          }
        }
        return null
      }
    })
  ]
})

export default handler
// { handler as GET, handler as POST }

import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';

// export const authOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error('Email and password are required');
//         }

//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//         });

//         if (!user) {
//           throw new Error('No user found with this email');
//         }

//         const isValidPassword = bcrypt.compareSync(
//           credentials.password,
//           user.password
//         );

//         if (!isValidPassword) {
//           throw new Error('Invalid credentials');
//         }

//         return user;
//       },
//     }),
//   ],
//   pages: {
//     signIn: '/auth/signin',
//     error: '/auth/error',
//   },
//   session: {
//     strategy: "jwt" as const,
//   },
//   callbacks: {
//     async session({ session, user }: { session: Session; user: User }) {
//       if (session?.user) {
//         session.user.id = user.id;
//       }
//       return session;
//     },
//   },
// };

//export default NextAuth(authOptions);

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions, Session, User } from "next-auth";
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Email and password are required');
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!user) {
                    throw new Error('No user found with this email');
                }

                const isValidPassword = bcrypt.compareSync(
                    credentials.password,
                    user.password
                );

                if (!isValidPassword) {
                    throw new Error('Invalid credentials');
                }

                return user;
            },
        }),
    ],
    pages: {
        signIn: '/auth/signin',
        error: '/auth/error',
    },
    session: {
        strategy: "jwt" as const,
    },
    callbacks: {
        // async jwt({ token, user }: { token: any; user?: User }) {
        //     console.log('JWT callback - user:', user); // Log user
        //     console.log('JWT callback - token:', token); // Log token
        //     if (user) {
        //         token.id = user.id; // Add user ID
        //         token.username = user.name; // Add username
        //     }
        //     return token;
        // },
        async jwt({ token, user }) {
            console.log('JWT callback - user:', user); // Log user
            console.log('JWT callback - token:', token); // Log token
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        //async session({ session, user }: { session: Session; user: User }) {
        //     if (session?.user) {
        //         session.user.id = user.id;
        //     }
        //     return session;
        // },
        async session({ session, token }: { session: Session; token: any }) {
            console.log('Session callback - session:', session);
            if (token) {
                session.user.id = token.id as string;
            }
            return session;
        },

    },
};

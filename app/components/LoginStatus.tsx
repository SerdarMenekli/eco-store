"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function LoginStatus() {
    const { data: session } = useSession();

    if (session) {
        return <>
            <Link href="/account/profile" className="hover:text-green-200">Account</Link>
            <span>Welcome, {session.user?.name || 'User'}!</span>
            <button onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</button>
        </>

    } else {
        return <Link href="/auth/signin">Login</Link>;
    }
}
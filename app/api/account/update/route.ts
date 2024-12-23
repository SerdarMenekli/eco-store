import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
      const session = await getServerSession(authOptions);
  
      if (!session?.user?.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
  
      const { name, email } = await req.json();
  
      await prisma.user.update({
        where: { id: session.user.id },
        data: { name, email },
      });
  
      return NextResponse.json({ message: "Profile updated successfully!" });
    } catch (error) {
      return NextResponse.json({ error: "Failed to update profile." }, { status: 500 });
    }
  }
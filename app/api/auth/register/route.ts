import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         const { email, password, name } = req.body;

//         const hashedPassword = bcrypt.hashSync(password, 10);

//         const user = await prisma.user.create({
//             data: {
//                 email,
//                 name,
//                 password: hashedPassword,
//             },
//         });

//         res.status(201).json(user);
//     } else {
//         res.status(405).end();
//     }
// }


export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Registration failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

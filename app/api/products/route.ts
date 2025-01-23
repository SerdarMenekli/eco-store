import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1', 10);
  const limit = parseInt(url.searchParams.get('limit') || '10', 10);
  const skip = (page - 1) * limit;

  const products = await prisma.product.findMany({
    skip,
    take: limit,
  });

  const total = await prisma.product.count();

  return NextResponse.json({
    products,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });

  // try {
  //   const products = await prisma.product.findMany();
  //   return NextResponse.json(products);
  // } catch (error) {
  //   console.error('Error fetching products:', error);
  //   return new NextResponse('Error fetching products', { status: 500 });
  // }
}

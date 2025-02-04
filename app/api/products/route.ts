import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1', 10);
  const limit = parseInt(url.searchParams.get('limit') || '10', 10);
  const skip = (page - 1) * limit;

  const search = url.searchParams.get('search')?.trim();

  const whereClause: Prisma.ProductWhereInput | undefined = search ? { name: { contains: search, mode: 'insensitive' as Prisma.QueryMode } } : undefined;

  const [products, total] = await Promise.all([
    prisma.product.findMany({ where: whereClause, skip, take: limit }),
    prisma.product.count({ where: whereClause }),
  ]);

  // let productsResult;
  // let totalResult;

  // if (search) {
  //   productsResult = await prisma.product.findMany({
  //     where: {
  //       name: {
  //         contains: search,
  //         mode: 'insensitive',
  //       },
  //     },
  //     skip,
  //     take: limit,
  //   });

  //   totalResult = await prisma.product.count({
  //     where: {
  //       name: {
  //         contains: search,
  //         mode: 'insensitive',
  //       },
  //     },
  //   });
  // }
  // else {
  //   productsResult = await prisma.product.findMany({
  //     skip,
  //     take: limit,
  //   });
  //   totalResult = await prisma.product.count();
  // }

  // const products = productsResult;
  // const total = totalResult;

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

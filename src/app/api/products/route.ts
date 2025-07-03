import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      description: body.description,
      category: body.category,
      section: body.section,
      imageUrl: body.imageUrl,
      price: body.price,
      buttonText: body.buttonText,
      link: body.link,
    },
  });

  return NextResponse.json(newProduct, { status: 201 });
}

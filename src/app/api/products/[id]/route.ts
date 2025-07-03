import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET product by ID
export async function GET(_: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const product = await prisma.product.findUnique({ where: { id: Number(id) } });

  if (!product) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}


// UPDATE product by ID
export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const data = await req.json();

  const updated = await prisma.product.update({
    where: { id: Number(id) },
    data,
  });

  return NextResponse.json(updated);
}

// DELETE product by ID
export async function DELETE(_: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  await prisma.product.delete({
    where: { id: Number(id) },
  });

  return new Response(null, { status: 204 });
}

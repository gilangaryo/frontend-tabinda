import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id);

  if (req.method === 'GET') {
    const product = await prisma.product.findUnique({ where: { id } });
    return res.status(200).json(product);
  }

  if (req.method === 'PUT') {
    const data = req.body;
    const updated = await prisma.product.update({ where: { id }, data });
    return res.status(200).json(updated);
  }

  if (req.method === 'DELETE') {
    await prisma.product.delete({ where: { id } });
    return res.status(204).end();
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}

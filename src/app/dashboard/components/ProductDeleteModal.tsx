'use client';

import Image from 'next/image';

export default function ProductDeleteModal({ product, onCancel, onConfirm }: {
  product: { name: string; subtitle: string; image: string };
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-lg p-6 w-[300px] text-center">
        <div className="text-red-500 text-2xl mb-2">🗑️</div>
        <h3 className="font-semibold text-lg mb-1">Discard Product</h3>
        <p className="text-sm text-gray-600 mb-4">Are you sure you want to discard product?</p>

        <div className="flex items-center gap-3 mb-4 justify-center">
          <Image src={product.image} alt={product.name} width={40} height={40} className="rounded" />
          <div className="text-left">
            <p className="font-semibold text-green-800">{product.name}</p>
            <p className="text-xs text-gray-500">{product.subtitle}</p>
          </div>
        </div>

        <div className="flex justify-between gap-2">
          <button onClick={onCancel} className="w-full py-2 rounded border text-gray-700">Cancel</button>
          <button onClick={onConfirm} className="w-full py-2 rounded bg-red-500 text-white hover:bg-red-600">Confirm</button>
        </div>
      </div>
    </div>
  );
}

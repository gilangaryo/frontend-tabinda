
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Pencil, Trash2, Plus } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  section: string;
  price: number;
  buttonText: string;
  link: string;
  imageUrl: string;
}

export default function ProductManagePage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleEdit = (id: number) => {
    router.push(`/dashboard/products/${id}/edit`);
  };

  const handleDelete = (product: Product) => {
    setSelectedProduct(product);
  };

  const confirmDelete = async () => {
    await fetch(`/api/products/${selectedProduct?.id}`, { method: 'DELETE' });
    setProducts((prev) => prev.filter((p) => p.id !== selectedProduct?.id));
    setSelectedProduct(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-serif italic">Product</h1>
          <p className="text-sm text-gray-500">Managing Product Item</p>
        </div>
        <Link href="/dashboard/products/new">
          <button className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded text-sm hover:bg-primary">
            <Plus size={16} /> Add Product
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-4 items-center px-4 py-2 text-sm text-gray-500 font-medium border-b">
        <div className="col-span-2">Product Name</div>
        <div>Unit Price</div>
        <div className="flex justify-between">
          <span>Section</span>
          <span>Action</span>
        </div>
      </div>

      {products.map((product) => (
        <div key={product.id} className="grid grid-cols-4 items-center px-4 py-3 text-sm hover:bg-gray-50">
          <div className="col-span-2 flex items-center gap-3">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={48}
              height={48}
              className="rounded object-cover w-12 h-12"
            />
            <div>
              <p className="text-primary font-semibold leading-tight">{product.name}</p>
              <p className="text-xs text-gray-500">{product.description}</p>
            </div>
          </div>
          <div className="text-sm font-medium">IDR {product.price.toLocaleString()}</div>
          <div className="flex items-center justify-between">
            <p className="text-sm">{product.section}</p>
            <div className="flex items-center gap-2">
              <button onClick={() => handleEdit(product.id)} className="text-white bg-secondary px-5 py-1 rounded text-xs flex items-center gap-1 hover:bg-primary">
                <Pencil size={14} /> Edit
              </button>
              <button onClick={() => handleDelete(product)} className="text-gray-500 hover:text-red-500 border border-gray-300 rounded p-1 hover:bg-red-100">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-lg p-6 w-md text-center">
            <Image
              src={'/dashboard/warning.png'}
              alt={selectedProduct.name}
              width={50}
              height={50}
              className="rounded items-center mx-auto mb-4"
            />
            <p className="mb-1 text-2xl font-semibold">Discard Product</p>
            <p className="text-sm text-gray-600 mb-4">Are you sure you want to delete this product?</p>
            <div className="flex items-center gap-3 mb-4 justify-center">
              <Image src={selectedProduct.imageUrl} alt={selectedProduct.name} width={40} height={40} className="rounded" />
              <div className="text-left">
                <p className="font-semibold text-green-800">{selectedProduct.name}</p>
                <p className="text-xs text-gray-500">{selectedProduct.description}</p>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <button onClick={() => setSelectedProduct(null)} className="w-full py-2 rounded text-black font-semibold bg-gray-200 hover:bg-gray-300">
                Cancel
              </button>
              <button onClick={confirmDelete} className="w-full py-2 rounded bg-[#ED4E4E] text-white font-semibold hover:bg-red-600">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import { Plus, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ProductFormPage() {
  const router = useRouter();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div
          className="flex items-start gap-2 cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={() => router.back()}
        >
          <ArrowLeft size={16} className="mt-1" />
          <div>
            <h1 className="text-2xl font-serif italic">Add Product</h1>
            <p className="text-sm text-gray-500">Back to product list</p>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded text-sm hover:bg-green-800">
          <Plus size={16} /> Add Product
        </button>
      </div>

      {/* Form grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* LEFT FORM SECTION */}
        <div className="space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Description</h3>
            <input
              placeholder="add product name"
              className="w-full border px-4 py-2 rounded mb-3"
            />
            <textarea
              placeholder="add a description"
              className="w-full border px-4 py-2 rounded h-24"
            />
          </div>

          {/* Category */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Category</h3>
            <input
              placeholder="Select Category"
              className="w-full border px-4 py-2 rounded mb-3"
            />
            <input
              placeholder="Select Section"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="space-y-6">
          {/* Product Image */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Product Image</h3>
            <div className="w-full border border-dashed rounded p-6 text-center text-sm text-gray-500">
              <p className="text-green-700 font-medium">Click to Upload</p>
              or drag and drop
            </div>
          </div>

          {/* Pricing */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Pricing</h3>
            <input
              placeholder="IDR 00.00"
              className="w-full border px-4 py-2 rounded mb-3"
            />
            <input
              placeholder="Shop Now"
              className="w-full border px-4 py-2 rounded mb-2"
            />
            <input
              placeholder="https://tabinda.com/product"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

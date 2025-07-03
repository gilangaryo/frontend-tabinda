'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Plus, ArrowLeft } from 'lucide-react';

export default function ProductFormPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [section, setSection] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description,
        category,
        section,
        imageUrl,
        price: parseInt(price),
        buttonText,
        link,
      }),
    });

    if (res.ok) {
      router.push('/dashboard/products');
    } else {
      alert('Gagal menambahkan produk.');
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
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

        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded text-sm hover:bg-green-800"
        >
          <Plus size={16} /> Add Product
        </button>
      </div>

      {/* Form Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* LEFT SECTION */}
        <div className="space-y-6">
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Description</h3>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="add product name"
              className="w-full border px-4 py-2 rounded mb-3"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="add a description"
              className="w-full border px-4 py-2 rounded h-24"
            />
          </div>

          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Select Category"
              className="w-full border px-4 py-2 rounded mb-3"
            />
            <input
              value={section}
              onChange={(e) => setSection(e.target.value)}
              placeholder="Select Section"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-6">
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Product Image URL</h3>
            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="/products/product1.png"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Pricing</h3>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="200000"
              className="w-full border px-4 py-2 rounded mb-3"
              type="number"
            />
            <input
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              placeholder="Shop Now"
              className="w-full border px-4 py-2 rounded mb-2"
            />
            <input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://tokopedia.com/tabinda/produk"
              className="w-full border px-4 py-2 rounded"
              type="url"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

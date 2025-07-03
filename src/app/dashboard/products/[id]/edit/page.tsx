'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Save } from 'lucide-react';

export default function ProductEditPage() {
  const router = useRouter();
  const params = useParams(); // ✅ ambil ID dari URL
  const id = params?.id as string;

  const [form, setForm] = useState({
    name: '',
    description: '',
    category: '',
    section: '',
    price: '',
    buttonText: 'Shop Now',
    link: '',
  });

  useEffect(() => {
    // Simulasi fetch dari database
    const dummyData = {
      name: 'SANDYAKALA',
      description: 'Sawda Abaya eksklusif Tabinda',
      category: 'Hijab',
      section: 'Product Collection',
      price: '200000',
      buttonText: 'Buy Now',
      link: 'https://tokopedia.com/tabinda/sandyakala',
    };
    setForm(dummyData);
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('UPDATE PRODUCT:', form);
    router.push('/dashboard/products');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-serif italic">Edit Product</h1>
          <p className="text-sm text-gray-500">Edit product info for: <strong>{id}</strong></p>
        </div>
        <button type="submit" className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded text-sm hover:bg-green-800">
          <Save size={16} /> Save Changes
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* LEFT */}
        <div className="space-y-6">
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Description</h3>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Product name"
              className="w-full border px-4 py-2 rounded mb-3"
            />
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Product description"
              className="w-full border px-4 py-2 rounded h-24"
            />
          </div>

          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Category</h3>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category"
              className="w-full border px-4 py-2 rounded mb-3"
            />
            <input
              name="section"
              value={form.section}
              onChange={handleChange}
              placeholder="Section"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Product Image</h3>
            <div className="w-full border border-dashed rounded p-6 text-center text-sm text-gray-500">
              <p className="text-green-700 font-medium">Click to Upload</p>
              or drag and drop
            </div>
          </div>

          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Pricing</h3>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="IDR 00.00"
              className="w-full border px-4 py-2 rounded mb-3"
            />
            <input
              name="buttonText"
              value={form.buttonText}
              onChange={handleChange}
              placeholder="CTA Label"
              className="w-full border px-4 py-2 rounded mb-2"
            />
            <input
              name="link"
              value={form.link}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

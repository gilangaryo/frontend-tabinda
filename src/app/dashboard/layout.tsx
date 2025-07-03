'use client';

import Image from 'next/image';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Main Dashboard',
      href: '/dashboard',
      icon: {
        default: '/dashboard/icons/dashboard-black.png',
        active: '/dashboard/icons/dashboard-white.png',
      },
    },
    {
      name: 'Page Manage',
      href: '/dashboard/page-manage',
      icon: {
        default: '/dashboard/icons/page-manage-black.png',
        active: '/dashboard/icons/page-manage-white.png',
      },
    },
    {
      name: 'Article',
      href: '/dashboard/articles',
      icon: {
        default: '/dashboard/icons/articles-black.png',
        active: '/dashboard/icons/articles-white.png',
      },
    },
    {
      name: 'Product',
      href: '/dashboard/products',
      icon: {
        default: '/dashboard/icons/product-black.png', // pastikan ini icon Product
        active: '/dashboard/icons/product-white.png',
      },
    },
  ];

  return (
    <div className="flex min-h-screen font-sans">
      <aside className="w-64 bg-white border-r p-6 flex flex-col justify-between">
        <div>
          <div className="text-2xl font-bold text-primary mb-10">
            <p>🧕 TABINDA</p>
            <p className="text-sm text-gray-400">Web Management</p>
          </div>

          <nav className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Company</p>
            </div>
            {navItems.map((item) => {
              const isActive = pathname === item.href || (
                item.href !== '/dashboard' && pathname.startsWith(`${item.href}/`)
              );

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'flex items-center gap-3 p-3 rounded mb-1',
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                >
                  <Image
                    src={isActive ? item.icon.active : item.icon.default}
                    alt={item.name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <hr className="border-t border-gray-200 my-3" />

            <div>
              <p className="text-sm text-gray-500">Account</p>
              <div className="flex items-center gap-3 mt-3">
                <Image
                  src="/profile.png"
                  alt="Admin"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-sm">Moni Roy</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
              </div>

              <button className="flex items-center gap-2 text-red-500 text-sm mt-4">
                <LogOut size={16} /> Log Out
              </button>
            </div>
          </nav>
        </div>
      </aside>

      <main className="flex-1 p-10 bg-gray-50">{children}</main>
    </div>
  );
}

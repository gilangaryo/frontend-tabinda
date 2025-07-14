'use client';

// import Image from 'next/image';
// import Link from 'next/link';
import Explore from '../components/Explore';
import ComingSoon from '../components/ComingSoon';

// const articles = [
//     {
//         slug: 'loving-scandinavian-style',
//         title: 'Loving Scandinavian Style',
//         date: 'Mar 6, 2025',
//         category: 'Article',
//         image: '/article/article-1.png',
//         excerpt:
//             'Embracing Japanese Aesthetics involves appreciating nature and craftsmanship. The philosophy of Wabi-Sabi teaches us to find...',
//     },
//     {
//         slug: 'embracing-japanese-styles',
//         title: 'Embracing Japanese Styles',
//         date: 'Mar 16, 2025',
//         category: 'Article',
//         image: '/article/article-2.png',
//         excerpt:
//             'Wabi-sabi, handmade fabrics, and the elegance of imperfection in style.',
//     },
//     {
//         slug: 'the-art-of-minimalism',
//         title: 'The Art of Minimalism',
//         date: 'Mar 8, 2025',
//         category: 'Article',
//         image: '/article/article-3.png',
//         excerpt:
//             'Minimal wardrobe and conscious elegance—less is more with meaning.',
//     },
// ];

export default function Article() {
    return (
        <div>
            <ComingSoon />
            <Explore />
        </div >
    );
}

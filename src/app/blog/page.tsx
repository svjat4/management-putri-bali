// src/app/blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { blogData } from '@/data/blogData';

export const metadata = {
  title: 'Blog Edukasi & Strategi Event Bali',
  description: 'Artikel wawasan taktis seputar sewa SPG Bali, optimasi event, vendor wedding organizer, dan tren industri entertainment Bali.'
};

export default function BlogListPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-12">Blog & Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogData.map((post) => (
          <article key={post.slug} className="bg-luxury-dark rounded-2xl overflow-hidden border border-gray-800">
            <div className="relative h-52 w-full">
              <Image src={post.mainImage} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <span className="text-xs text-gold-500 font-bold uppercase">{post.category}</span>
              <h2 className="text-xl font-bold mt-2 mb-4 leading-snug hover:text-gold-500 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-400 text-sm line-clamp-3 mb-4">{post.metaDescription}</p>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>By {post.author}</span>
                <span>{post.publishedAt}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogData } from '@/data/blogData';
import JsonLd from '@/components/seo/JsonLd';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogData.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find((b) => b.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` }
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogData.find((b) => b.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": post.title,
    "image": [post.mainImage],
    "datePublished": post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "Management Putri Bali"
    }
  };

  return (
    <>
      <JsonLd schema={articleSchema} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <span className="text-gold-500 font-bold text-sm uppercase tracking-widest">{post.category}</span>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-2 mb-6 leading-tight">{post.title}</h1>
        <div className="flex gap-4 text-xs text-gray-400 mb-8 border-b border-gray-800 pb-4">
          <span>Oleh: {post.author}</span>
          <span>&bull;</span>
          <span>Dipublikasikan: {post.publishedAt}</span>
        </div>
        <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-8">
          <Image src={post.mainImage} alt={post.title} fill className="object-cover" priority />
        </div>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-6 text-base">
          <p>{post.content}</p>
        </div>
      </article>
    </>
  );
}
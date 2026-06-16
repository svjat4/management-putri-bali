import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { talentsData } from '@/data/talentsData';
import JsonLd from '@/components/seo/JsonLd';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return talentsData.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const talent = talentsData.find((t) => t.slug === slug);
  if (!talent) return {};

  return {
    title: `${talent.name} - Professional ${talent.category} Bali`,
    description: `Profil profesional ${talent.name}. Kategori: ${talent.category}, Tinggi: ${talent.height}cm. Amankan booking event Anda melalui Management Putri Bali.`,
    alternates: { canonical: `/talents/${talent.slug}` }
  };
}

export default async function TalentDetailPage({ params }: Props) {
  const { slug } = await params;
  const talent = talentsData.find((t) => t.slug === slug);
  if (!talent) notFound();

  const itemPageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": `${talent.name} - ${talent.category} Bali`,
    "description": talent.description,
    "image": talent.mainImage
  };

  const whatsappUrl = `https://wa.me/6281234567890?text=Halo%20Putri%20Bali%20Management,%20saya%20tertarik%20untuk%20booking%20talent%20bernama%20${encodeURIComponent(talent.name)}%20kategori%20${talent.category}`;

  return (
    <>
      <JsonLd schema={itemPageSchema} />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative h-[65vh] rounded-3xl overflow-hidden border border-gray-800">
            <Image src={talent.mainImage} alt={talent.name} fill className="object-cover" priority />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-gold-500 font-bold tracking-widest text-sm uppercase">{talent.category}</span>
            <h1 className="text-4xl font-extrabold mt-2 mb-4">{talent.name}</h1>
            <p className="text-gray-300 leading-relaxed mb-6">{talent.description}</p>
            
            <div className="bg-luxury-dark rounded-2xl p-6 border border-gray-800 space-y-4 mb-8">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Tinggi Badan</span>
                <span className="font-semibold">{talent.height} cm</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Penguasaan Bahasa</span>
                <span className="font-semibold">{talent.languages.join(', ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Pengalaman Esensial</span>
                <span className="font-semibold text-right max-w-xs">{talent.experience}</span>
              </div>
            </div>

            <Link href={whatsappUrl} className="bg-gold-500 text-luxury-black font-bold text-center py-4 rounded-xl hover:bg-gold-600 transition-all transform hover:-translate-y-0.5">
              Book {talent.name} via WhatsApp
            </Link>
          </div>
        </div>

        {/* PORTFOLIO GRID */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Koleksi Portofolio Foto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {talent.portfolio.map((img, index) => (
              <div key={index} className="relative h-80 rounded-2xl overflow-hidden border border-gray-800">
                <Image src={img} alt={`${talent.name} portofolio ${index + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
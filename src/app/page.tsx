import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Users, Heart, Star, ArrowRight } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Management Putri Bali",
    "image": "https://managementputribali.com/images/og-main.jpg",
    "telePhone": "+62-812-3456-7890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Teuku Umar No.100",
      "addressLocality": "Denpasar",
      "addressRegion": "Bali",
      "postalCode": "80113",
      "addressCountry": "ID"
    },
    "priceRange": "$$$"
  };

  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1920" 
          alt="Premium Bali Talent & Event Management" 
          fill 
          priority
          className="object-cover opacity-40"
        />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Professional <span className="text-gold-500">Bali Talent</span> & Event Management
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Solusi agensi premium untuk Jasa SPG Bali, Model, MC Profesional, Wedding Organizer, dan Layanan Entertainment Berkelas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/6281234567890?text=Halo%20Putri%20Bali%20Management,%20saya%20ingin%20booking%20talent" className="bg-gold-500 text-luxury-black font-bold px-8 py-4 rounded-full hover:bg-gold-600 transition-transform transform hover:scale-105 text-center">
              Book Now via WhatsApp
            </Link>
            <Link href="/talents" className="border border-white hover:border-gold-500 hover:text-gold-500 px-8 py-4 rounded-full transition-colors font-medium text-center">
              Lihat Katalog Talent
            </Link>
          </div>
        </div>
      </section>

      {/* CORE SERVICES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Utama Kami</h2>
          <p className="text-gray-400">Menghadirkan standar eksekusi tertinggi untuk brand dan momen krusial Anda.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "Talent Management", desc: "Kumpulan model premium, SPG pro, dan influencer berpengaruh di Bali.", icon: Users },
            { title: "Event Organizer", desc: "MICE eksklusif, exhibition, corporate, dan product launching.", icon: Calendar },
            { title: "Wedding Organizer", desc: "Manajemen pernikahan impian intim hingga skala masif di Bali.", icon: Heart },
            { title: "Entertainment Services", desc: "Penari Tradisional Bali kelas maestro, fire dance, akustik, dan MC.", icon: Star },
          ].map((s, idx) => (
            <div key={idx} className="bg-luxury-dark border border-gray-800 p-6 rounded-2xl hover:border-gold-500/50 transition-all group">
              <s.icon className="w-12 h-12 text-gold-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
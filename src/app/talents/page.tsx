"use client";
import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { talentsData } from '@/data/talentsData';
import { Search } from 'lucide-react';

export default function TalentsPage() {
  const [category, setCategory] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const filteredTalents = useMemo(() => {
    return talentsData.filter((t) => {
      const matchCat = category === 'All' || t.category === category;
      const matchSearch = t.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [category, search]);

  const categories = ['All', 'Model', 'SPG', 'MC', 'Host', 'Dancer', 'Brand Ambassador'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">Our Professional Talents</h1>
      <p className="text-center text-gray-400 mb-12">Katalog resmi talent terverifikasi Management Putri Bali.</p>

      {/* FILTER & SEARCH */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === cat ? 'bg-gold-500 text-luxury-black' : 'bg-luxury-dark text-gray-300 hover:bg-gray-800'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Cari nama talent..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-luxury-dark text-white pl-10 pr-4 py-2 rounded-full border border-gray-800 focus:outline-none focus:border-gold-500 text-sm"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* LIST DATA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {filteredTalents.map((t) => (
          <div key={t.slug} className="bg-luxury-dark rounded-2xl overflow-hidden border border-gray-800 group hover:border-gold-500/40 transition-all">
            <div className="relative h-80 w-full overflow-hidden">
              <Image 
                src={t.mainImage} 
                alt={`${t.name} - ${t.category} Bali`} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-w-7xl) 25vw"
              />
            </div>
            <div className="p-5">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">{t.category}</span>
              <h2 className="text-xl font-bold mt-1 mb-2">{t.name}</h2>
              <p className="text-xs text-gray-400 line-clamp-2 mb-4">{t.experience}</p>
              <Link href={`/talents/${t.slug}`} className="block text-center bg-transparent border border-gold-500/50 hover:bg-gold-500 hover:text-luxury-black text-gold-500 text-sm font-semibold py-2.5 rounded-xl transition-all">
                View Profile Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
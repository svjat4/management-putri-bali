import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery Documentation | Management Putri Bali",
  description: "Kumpulan foto dokumentasi event, SPG, model, dan talent Management Putri Bali.",
};

const DUMMY_GALLERY = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600",
  "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=600",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600",
];

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">Dokumentasi <span className="text-gold-500">Gallery</span></h1>
      <p className="text-center text-gray-400 mb-12">Koleksi visual dari momen-momen terbaik di setiap acara yang kami kelola.</p>

      {/* Masonry Layout diatur dari globals.css */}
      <div className="masonry-grid">
        {DUMMY_GALLERY.map((img, index) => (
          <div key={index} className="masonry-item relative rounded-2xl overflow-hidden group">
            {/* Aspect ratio bervariasi secara dummy untuk efek masonry */}
            <Image 
              src={img} 
              alt={`Gallery Putri Bali ${index + 1}`} 
              width={600} 
              height={index % 2 === 0 ? 800 : 500} 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-gold-500 font-bold border border-gold-500 px-4 py-2 rounded-full">Lihat Detail</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
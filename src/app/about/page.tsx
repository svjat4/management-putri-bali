import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Company Story & Visi Misi",
  description: "Mengenal lebih dekat Management Putri Bali. Agensi spesialis Talent Management, Model, SPG, dan Event Organizer profesional di Bali.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Cerita <span className="text-gold-500">Kami</span></h1>
          <p className="text-gray-300 leading-relaxed mb-6">
            Management Putri Bali lahir dari dedikasi untuk menghadirkan standar kualitas tertinggi dalam industri hiburan dan manajemen acara di Pulau Dewata. Sejak awal berdiri, kami telah dipercaya oleh ratusan brand lokal hingga internasional untuk merepresentasikan identitas mereka melalui talent profesional kami.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Kami bukan sekadar agensi; kami adalah mitra strategis Anda. Tim kurator kami memastikan setiap Model, SPG, MC, dan Performer yang kami sediakan memiliki etos kerja tinggi, *attitude* profesional, dan keahlian yang terverifikasi.
          </p>
        </div>
        <div className="relative h-[500px] rounded-3xl overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800" alt="Tim Management Putri Bali" fill className="object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <div className="bg-luxury-dark p-8 rounded-2xl border border-gray-800">
          <h3 className="text-2xl font-bold text-gold-500 mb-4">Visi</h3>
          <p className="text-gray-300">Menjadi agensi Talent Management & Event Organizer nomor satu dan paling dipercaya di Bali dan Indonesia, dengan mengedepankan kualitas, profesionalisme, dan inovasi.</p>
        </div>
        <div className="bg-luxury-dark p-8 rounded-2xl border border-gray-800">
          <h3 className="text-2xl font-bold text-gold-500 mb-4">Misi</h3>
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li>Menyediakan talent dengan kualifikasi terbaik (SPG, Model, MC, dll).</li>
            <li>Memberikan solusi *end-to-end* untuk kebutuhan Event Organizer.</li>
            <li>Mengangkat nilai budaya lokal (Tari Tradisional) dalam standar global.</li>
            <li>Membangun hubungan jangka panjang dengan klien melalui layanan prima.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
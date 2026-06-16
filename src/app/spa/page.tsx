"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Sparkles, ShieldAlert, Heart, Scissors } from "lucide-react";

// Data Menu Satuan (A la Carte) dari image_ed7b06.jpg
const alaCarteMenu = {
  massage: [
    { name: "Balinese Massage", desc: "Pijat tradisional Bali dengan teknik deep tissue untuk meredakan ketegangan otot.", time: "60 / 90 Min" },
    { name: "Lomi Lomi Massage", desc: "Teknik pijat khas Hawaii yang mengalir lembut menggunakan lengan dan telapak tangan.", time: "60 / 90 Min" },
    { name: "Thai Massage", desc: "Terapi peregangan tubuh ala Thailand untuk meningkatkan fleksibilitas energi.", time: "60 Min" },
    { name: "Hot Stones Therapy", desc: "Relaksasi mendalam menggunakan batu vulkanik hangat untuk melancarkan sirkulasi.", time: "60 Min" },
    { name: "Hot Compress Massage", desc: "Kombinasi pijat dengan kompres herbal hangat untuk mengurangi kelelahan.", time: "60 / 90 Min" },
    { name: "Hot Oil Massage", desc: "Sensasi pijatan minyak hangat yang menutrisi kulit sekaligus menenangkan pikiran.", time: "60 Min" },
    { name: "Reflexology", desc: "Titik pijat refleksi kaki untuk menyeimbangkan kembali kebugaran organ tubuh.", time: "60 Min" },
    { name: "Back Massage", desc: "Fokus perawatan intensif pada area punggung dan bahu yang kaku.", time: "30 Min" },
    { name: "Head Massage", desc: "Pijatan lembut kepala untuk meredakan stres dan melancarkan sirkulasi udara.", time: "30 Min" },
  ],
  beauty: [
    { name: "Exclusive Facial", desc: "Perawatan wajah menyeluruh untuk membersihkan, hidrasi, dan mencerahkan kulit.", time: "45 Min" },
    { name: "Premium Eyelash Extension", desc: "Pemasangan bulu mata helai demi helai untuk hasil mata lentik alami nan memukau.", time: "60 Min" },
    { name: "Luxury Nail Gel", desc: "Pewarnaan dan perawatan kuku dengan gel premium tahan lama dan berkilau.", time: "45 Min" },
    { name: "Organic Body Scrub", desc: "Eksfoliasi kulit menggunakan lulur alami untuk mengangkat sel kulit mati.", time: "30 Min" },
    { name: "Nourishing Body Wrap", desc: "Masker seluruh tubuh untuk mengunci kelembapan dan menutrisi lapisan kulit.", time: "30 Min" },
  ],
};

// Data Paket dari image_ed7b00.png
const specialPackages = [
  {
    title: "Royal 2-Hour Ritual",
    duration: "120 Minutes",
    tag: "Most Popular",
    items: [
      { name: "Foot Wash Ritual", time: "5 Mins" },
      { name: "Signature Massage", time: "55 Mins" },
      { name: "Exclusive Facial", time: "30 Mins" },
      { name: "Organic Body Scrub", time: "30 Mins" },
    ],
    note: "Paket lengkap hulu ke hilir untuk pemulihan total tubuh dan pancaran wajah Anda.",
  },
  {
    title: "Serenity Body Escape",
    duration: "90 Minutes",
    tag: "Best Value",
    items: [
      { name: "Signature Massage", time: "60 Mins" },
      { name: "Organic Body Scrub", time: "30 Mins" },
    ],
    note: "Perpaduan sempurna antara pijatan pelepas penat dan pembersihan kulit secara mendalam.",
  },
  {
    title: "Revitalizing Glow Journey",
    duration: "90 Minutes",
    tag: "Nourishing",
    items: [
      { name: "Signature Massage", time: "60 Mins" },
      { name: "Nourishing Body Wrap", time: "30 Mins" },
    ],
    note: "Sangat cocok untuk menghidrasi kulit kering sekaligus merileksasikan otot yang lelah.",
  },
];

export default function SpaMenuPage() {
  const [activeTab, setActiveTab] = useState<"packages" | "alacarte">("packages");

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-500 uppercase tracking-widest text-sm font-semibold"
          >
            Clara Bali Spa
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mt-2 text-white"
          >
            Spa & Ritual Menu
          </motion.h1>
          <div className="w-24 h-0.5 bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Policy Notice Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-4 mb-12 max-w-2xl mx-auto flex items-start gap-4"
        >
          <ShieldAlert className="text-amber-500 shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="text-amber-400 font-medium text-sm md:text-base">Gentlemen Guest Policy Notice</h4>
            <p className="text-neutral-400 text-xs md:text-sm mt-1 leading-relaxed">
              Untuk kenyamanan dan standar operasional terapi terapeutik kami, setiap tamu pria wajib ditangani oleh <span className="text-amber-400 font-semibold">2 Terapis (Double Therapist Care)</span> secara bersamaan.
            </p>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-neutral-900 p-1.5 rounded-full border border-neutral-800 flex gap-2">
            <button
              onClick={() => setActiveTab("packages")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "packages" 
                  ? "bg-amber-500 text-neutral-950 shadow-lg" 
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Special Packages
            </button>
            <button
              onClick={() => setActiveTab("alacarte")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "alacarte" 
                  ? "bg-amber-500 text-neutral-950 shadow-lg" 
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              A la Carte Services
            </button>
          </div>
        </div>

        {/* Dynamic Content Sections */}
        <AnimatePresence mode="wait">
          {activeTab === "packages" ? (
            <motion.div
              key="packages"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {specialPackages.map((pkg, idx) => (
                <div 
                  key={idx} 
                  className="bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shadow-xl"
                >
                  <div className="absolute top-0 right-0 bg-amber-500/10 text-amber-400 text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-bl-xl border-b border-l border-amber-500/20">
                    {pkg.tag}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 text-amber-500 mb-2">
                      <Clock size={16} />
                      <span className="text-xs font-semibold uppercase tracking-wider">{pkg.duration}</span>
                    </div>
                    <h3 className="text-xl font-serif text-white mb-4 group-hover:text-amber-400 transition-colors">{pkg.title}</h3>
                    <p className="text-neutral-400 text-xs leading-relaxed mb-6 italic">"{pkg.note}"</p>
                    
                    <div className="space-y-3 border-t border-neutral-800/60 pt-4">
                      {pkg.items.map((item, i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                          <span className="text-neutral-300 font-medium">{item.name}</span>
                          <span className="text-neutral-500 text-xs bg-neutral-950 px-2 py-0.5 rounded-md border border-neutral-800">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tombol mengarah langsung ke WhatsApp dengan teks dinamis sesuai paket */}
                  <div className="mt-8">
                    <a 
                      href={`https://wa.me/6287897465067?text=Halo%20Clara%20Bali%20Spa,%20saya%20tertarik%20untuk%20booking%20paket%20*${encodeURIComponent(pkg.title)}*`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2.5 text-center bg-neutral-950 hover:bg-amber-500 hover:text-neutral-950 text-neutral-300 font-medium rounded-xl text-xs uppercase tracking-wider border border-neutral-800 hover:border-amber-500 transition-all duration-300 shadow-md"
                    >
                      Book via WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="alacarte"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {/* Category: Massages */}
              <div>
                <div className="flex items-center gap-3 mb-8 border-b border-neutral-800 pb-2">
                  <Heart className="text-amber-500" size={22} />
                  <h2 className="text-2xl font-serif text-white">Signature Massages</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                  {alaCarteMenu.massage.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start gap-4 border-b border-neutral-900 pb-4 hover:border-neutral-800 transition-colors group">
                      <div className="space-y-1">
                        <h4 className="text-base font-medium text-neutral-200 group-hover:text-amber-400 transition-colors">{item.name}</h4>
                        <p className="text-neutral-400 text-xs leading-relaxed max-w-md">{item.desc}</p>
                      </div>
                      <span className="text-xs text-amber-500 bg-amber-500/5 border border-amber-500/20 px-2.5 py-1 rounded-full font-medium whitespace-nowrap">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category: Beauty & Care */}
              <div>
                <div className="flex items-center gap-3 mb-8 border-b border-neutral-800 pb-2">
                  <Scissors className="text-amber-500" size={22} />
                  <h2 className="text-2xl font-serif text-white">Beauty & Aesthetic Touch</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                  {alaCarteMenu.beauty.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start gap-4 border-b border-neutral-900 pb-4 hover:border-neutral-800 transition-colors group">
                      <div className="space-y-1">
                        <h4 className="text-base font-medium text-neutral-200 group-hover:text-amber-400 transition-colors">{item.name}</h4>
                        <p className="text-neutral-400 text-xs leading-relaxed max-w-md">{item.desc}</p>
                      </div>
                      <span className="text-xs text-amber-500 bg-amber-500/5 border border-amber-500/20 px-2.5 py-1 rounded-full font-medium whitespace-nowrap">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tambahan CTA Global untuk Menu Satuan (A la Carte) */}
              <div className="mt-16 text-center bg-neutral-900 border border-neutral-800 rounded-2xl p-8 max-w-xl mx-auto shadow-xl">
                <h3 className="text-lg font-serif text-white mb-2">Ingin Mengombinasikan Layanan Sendiri?</h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                  Pilih beberapa layanan A la Carte di atas dan diskusikan jadwal perawatan kustom Anda langsung dengan admin kami.
                </p>
                <a
                  href="https://wa.me/6287897465067?text=Halo%20Clara%20Bali%20Spa,%20saya%20tertarik%20untuk%20konsultasi%20dan%20booking%20layanan%20A%20la%20Carte."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-amber-500/5"
                >
                  Hubungi Clara Spa via WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
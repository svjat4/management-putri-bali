"use client";
import { useState } from 'react';
import { faqData } from '@/data/faqData';
import { ChevronDown, ChevronUp } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <>
      <JsonLd schema={faqSchema} />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4">Frequently Asked Questions</h1>
        <p className="text-center text-gray-400 mb-12">Segala informasi esensial operasional, legalitas, dan kualifikasi layanan kami.</p>
        
        <div className="space-y-4">
          {faqData.map((f, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div key={idx} className="bg-luxury-dark border border-gray-800 rounded-xl overflow-hidden transition-all">
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center p-5 text-left font-medium hover:text-gold-500 transition-colors"
                >
                  <span>{f.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-gold-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-gray-400 text-sm leading-relaxed border-t border-gray-800/40">
                    {f.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
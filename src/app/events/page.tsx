import Image from "next/image";
import Link from "next/link";
import { eventsData } from "@/data/eventsData";
import { MapPin, Calendar } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Portfolio | Event Organizer Bali",
  description: "Lihat rekam jejak sukses Event Organizer & Wedding Management Putri Bali dalam menangani Corporate Event, Pameran, dan Pernikahan di Bali.",
};

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">Our <span className="text-gold-500">Event Portfolio</span></h1>
      <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Kami berdedikasi menciptakan momen tak terlupakan dengan eksekusi sempurna. Berikut adalah beberapa event sukses yang kami tangani.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {eventsData.map((event) => (
          <div key={event.slug} className="bg-luxury-dark rounded-3xl overflow-hidden border border-gray-800 group">
            <div className="relative h-64 w-full">
              <Image src={event.mainImage} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-gold-500 text-xs font-bold px-3 py-1.5 rounded-full uppercase">
                {event.category}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">{event.title}</h2>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-gold-500" />{event.location}</div>
                <div className="flex items-center"><Calendar className="w-4 h-4 mr-1 text-gold-500" />{event.year}</div>
              </div>
              <p className="text-gray-300 text-sm line-clamp-2 mb-6">{event.description}</p>
              <Link href={`/events/${event.slug}`} className="inline-block border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-luxury-black font-semibold px-6 py-2.5 rounded-full transition-colors">
                View Event Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
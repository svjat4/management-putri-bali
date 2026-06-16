import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { eventsData } from "@/data/eventsData";
import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { MapPin, User, CalendarDays } from "lucide-react";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return eventsData.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = eventsData.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: `${event.title} | Portfolio`,
    description: event.description,
  };
}

export default async function EventDetail({ params }: Props) {
  const { slug } = await params;
  const event = eventsData.find((e) => e.slug === slug);
  if (!event) notFound();

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "image": event.mainImage,
    "description": event.description,
    "location": {
      "@type": "Place",
      "name": event.location
    }
  };

  return (
    <>
      <JsonLd schema={eventSchema} />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="relative h-[50vh] w-full rounded-3xl overflow-hidden mb-12">
          <Image src={event.mainImage} alt={event.title} fill className="object-cover" priority />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="text-gold-500 font-bold uppercase tracking-wider text-sm">{event.category}</span>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-2 mb-6">{event.title}</h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{event.description}</p>
            
            <h3 className="text-2xl font-bold mb-6">Gallery Event</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.gallery.map((img, i) => (
                <div key={i} className="relative h-64 rounded-xl overflow-hidden">
                  <Image src={img} alt={`Gallery ${i}`} fill className="object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-luxury-dark p-6 rounded-2xl border border-gray-800">
              <h4 className="font-bold text-lg mb-4 border-b border-gray-800 pb-2">Event Information</h4>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex items-center"><MapPin className="w-5 h-5 text-gold-500 mr-3" /> {event.location}</li>
                <li className="flex items-center"><CalendarDays className="w-5 h-5 text-gold-500 mr-3" /> Tahun {event.year}</li>
                <li className="flex items-center"><User className="w-5 h-5 text-gold-500 mr-3" /> Klien: {event.client}</li>
              </ul>
            </div>

            {event.testimonial && (
              <div className="bg-gold-500/10 border border-gold-500/30 p-6 rounded-2xl">
                <p className="italic text-gray-300 text-sm mb-4">"{event.testimonial.comment}"</p>
                <div>
                  <p className="font-bold text-gold-500">{event.testimonial.name}</p>
                  <p className="text-xs text-gray-400">{event.testimonial.role}</p>
                </div>
              </div>
            )}

            <Link href={`https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20membuat%20event%20serupa%20dengan%20${event.title}`} className="block w-full text-center bg-gold-500 text-luxury-black font-bold py-4 rounded-xl hover:bg-gold-600 transition-colors">
              Request Similar Event
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
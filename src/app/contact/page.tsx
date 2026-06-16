import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Hubungi Kami",
  description: "Hubungi Management Putri Bali untuk penawaran Event Organizer, booking SPG, Model, dan Talent Management di Bali.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16">Hubungi <span className="text-gold-500">Kami</span></h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Informasi Kontak */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold mb-6">Mari Diskusikan Event Anda</h2>
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-lg">Kantor Pusat</h4>
              <p className="text-gray-400">Jl. Teuku Umar No.100, Denpasar, Bali, 80113, Indonesia</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-lg">WhatsApp / Telepon</h4>
              <p className="text-gray-400">+62 812-3456-7890</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-400">info@managementputribali.com</p>
            </div>
          </div>

          <div className="pt-8">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.39008985226!2d115.13840325820312!3d-8.670458199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9374a!2sDenpasar%2C%20Bali!5e0!3m2!1sen!2sid!4v1700000000000" 
              width="100%" height="250" style={{ border: 0, borderRadius: '1rem' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        {/* Form Kontak */}
        <div className="bg-luxury-dark p-8 rounded-3xl border border-gray-800">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Nama Lengkap / Instansi</label>
              <input type="text" className="w-full bg-luxury-black border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500" placeholder="Masukkan nama Anda" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input type="email" className="w-full bg-luxury-black border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500" placeholder="nama@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Layanan yang Dibutuhkan</label>
              <select className="w-full bg-luxury-black border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500">
                <option>Booking SPG / Model</option>
                <option>Event Organizer / Wedding</option>
                <option>Booking MC / Host</option>
                <option>Tari Tradisional Bali</option>
                <option>Lainnya</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Pesan Tambahan</label>
              <textarea rows={4} className="w-full bg-luxury-black border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500" placeholder="Jelaskan detail event Anda..."></textarea>
            </div>
            <Button type="button" className="w-full">Kirim Pesan</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
import Link from 'next/Link';

export default function Footer() {
  return (
    <footer className="bg-luxury-dark border-t border-gold-500/20 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-gold-500 font-bold text-lg mb-4">Management Putri Bali</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Penyedia layanan manajemen talent kelas atas, model, SPG, MC, penari tradisional, dan event organizer profesional bersertifikasi di Bali.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Layanan Utama</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><Link href="/talents" className="hover:text-gold-500">Talent Management & SPG</Link></li>
            <li><Link href="/events" className="hover:text-gold-500">Event Organizer Bali</Link></li>
            <li><Link href="/events" className="hover:text-gold-500">Wedding Event Management</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Hubungi Kami</h4>
          <p className="text-gray-400 text-sm">Denpasar, Bali, Indonesia</p>
          <p className="text-gray-400 text-sm mt-2">Email: info@managementputribali.com</p>
          <p className="text-gold-500 font-semibold text-sm mt-1">WA: +62 812-3456-7890</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Management Putri Bali. All Rights Reserved. Hub Premium Services.
      </div>
    </footer>
  );
}
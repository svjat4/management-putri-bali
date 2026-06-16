"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Talents', href: '/talents' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-luxury-black/90 backdrop-blur-md border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-bold tracking-wider text-gold-500">
            PUTRI BALI <span className="text-xs block text-gray-400 font-light">MANAGEMENT</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-gold-500 transition-colors text-sm font-medium">
                {l.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X className="text-gold-500" /> : <Menu className="text-gold-500" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-luxury-dark px-4 pt-2 pb-4 space-y-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="block py-2 text-base font-medium border-b border-gray-700">
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
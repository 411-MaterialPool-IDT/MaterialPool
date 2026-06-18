// src/components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-[#1e293b] border-b border-gray-700 text-white px-8 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3">
        {}
        <Image 
          src="/logo.png" 
          alt="Logo de MaterialPool" 
          width={40} 
          height={40} 
          className="object-contain" 
        />
        <span className="font-bold text-xl tracking-tight">MaterialPool</span>
      </Link>
      <div className="flex items-center gap-6 text-sm font-medium">
        <Link href="/catalogo" className="hover:text-yellow-500 transition-colors">Catálogo</Link>
        <Link href="/mis-solicitudes" className="hover:text-yellow-500 transition-colors">Solicitudes</Link>
        <div className="border-l border-gray-600 pl-6 text-gray-400">
          Mi Empresa S.A.
        </div>
      </div>
    </nav>
  );
}

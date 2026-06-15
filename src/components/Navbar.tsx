// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#1e293b] border-b border-gray-700 text-white px-8 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div className="bg-yellow-500 text-black font-bold px-3 py-1 rounded">MP</div>
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
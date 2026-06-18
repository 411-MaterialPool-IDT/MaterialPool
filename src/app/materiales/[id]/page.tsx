// src/app/materiales/[id]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function MaterialDetalle() {
  const { id } = useParams();

  return (
    <main className="min-h-screen bg-[#0f172a] text-white p-8 flex flex-col items-center justify-center">
      <div className="bg-[#1e293b] p-8 rounded-lg border border-gray-700 max-w-lg text-center shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-yellow-500">Ficha Técnica del Material</h1>
        <p className="text-gray-300 mb-6">
          Estás viendo los detalles del insumo con identificador interno: <br/>
          <span className="font-mono text-xs text-gray-500 bg-gray-800 p-1 rounded mt-2 block break-all">{id}</span>
        </p>
        <p className="text-sm text-gray-400 mb-8 border-t border-gray-600 pt-4">
          (El módulo de compra directa y especificaciones técnicas completas se encuentra en desarrollo para la siguiente versión).
        </p>
        
        <Link 
          href="/catalogo" 
          className="bg-yellow-500 text-black font-bold py-2 px-6 rounded hover:bg-yellow-400 transition-colors"
        >
          Regresar al Catálogo
        </Link>
      </div>
    </main>
  );
}
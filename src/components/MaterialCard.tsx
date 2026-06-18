import type { Material } from '../types/material';
import Link from 'next/link';

export default function MaterialCard({ material }: { material: Material }) {
  return (
    <div className="bg-[#1e293b] rounded-lg overflow-hidden shadow-lg border border-gray-700 text-white transition-transform hover:scale-105">
      {material.imagen_url ? (
        <img
          src={material.imagen_url}
          alt={`Imagen de ${material.nombre}`}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      ) : (
        <div className="w-full h-48 bg-[#4b5563] flex items-center justify-center text-gray-400 rounded-t-lg">
          Imagen no disponible
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold truncate">{material.nombre}</h3>
        <p className="text-sm text-gray-400 mt-1 truncate">{material.descripcion}</p>
        <div className="flex justify-between items-end mt-4">
          <div>
            <span className="text-yellow-500 font-bold text-xl">${material.precio_unitario}</span>
            <span className="text-xs text-gray-400 block mt-1">Stock: {material.stock} {material.unidad_medida}</span>
          </div>
          <Link
            href={`/materiales/${material.id}`}
            className="bg-transparent border border-gray-500 hover:bg-gray-700 text-white py-1.5 px-4 rounded text-sm transition-colors text-center block"
          >
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
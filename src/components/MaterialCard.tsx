import type { Material } from '../types/material';

export default function MaterialCard({ material }: { material: Material }) {
  return (
    <div className="bg-[#1e293b] rounded-lg overflow-hidden shadow-lg border border-gray-700 text-white transition-transform hover:scale-105">
      <div className="h-40 bg-gray-600 w-full flex items-center justify-center">
        <span className="text-gray-400 text-sm">Imagen no disponible</span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold truncate">{material.nombre}</h3>
        <p className="text-sm text-gray-400 mt-1 truncate">{material.descripcion}</p>
        <div className="flex justify-between items-end mt-4">
          <div>
            <span className="text-yellow-500 font-bold text-xl">${material.precio_unitario}</span>
            <span className="text-xs text-gray-400 block mt-1">Stock: {material.stock} {material.unidad_medida}</span>
          </div>
          <button className="bg-transparent border border-gray-500 hover:bg-gray-700 text-white py-1.5 px-4 rounded text-sm transition-colors">
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  );
}
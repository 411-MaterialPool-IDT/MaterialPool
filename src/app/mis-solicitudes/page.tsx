'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export interface Solicitud {
  id: string;
  material_id: string;
  comprador_id: string;
  cantidad: number;
  estado: string;
  fecha_solicitud: string;
}

export default function SolicitudesPage() {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSolicitudes() {
      const { data, error } = await supabase
        .from('solicitudes')
        .select('*')
        .order('fecha_solicitud', { ascending: false });

      if (error) {
        console.error("Error cargando solicitudes:", error.message);
      } else if (data) {
        setSolicitudes(data as Solicitud[]);
      }
      setLoading(false);
    }

    fetchSolicitudes();
  }, []);

  return (
    <main className="p-8 bg-[#0f172a] min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">Mis Solicitudes de Materiales</h1>
      
      {loading ? (
        <p className="text-gray-400">Cargando historial de transacciones...</p>
      ) : (
        <div className="bg-[#1e293b] rounded-lg border border-gray-700 overflow-hidden">
          <table className="w-full text-left text-white">
            <thead className="bg-[#334155] text-gray-300">
              <tr>
                <th className="p-4 border-b border-gray-600">ID Solicitud</th>
                <th className="p-4 border-b border-gray-600">Cantidad</th>
                <th className="p-4 border-b border-gray-600">Fecha</th>
                <th className="p-4 border-b border-gray-600">Estado</th>
              </tr>
            </thead>
            <tbody>
              {solicitudes.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-400">
                    No hay solicitudes registradas aún.
                  </td>
                </tr>
              ) : (
                solicitudes.map((solicitud) => (
                  <tr key={solicitud.id} className="hover:bg-[#475569] transition-colors border-b border-gray-700 last:border-0">
                    <td className="p-4 font-mono text-sm text-gray-400">
                      {solicitud.id.split('-')[0]}...
                    </td>
                    <td className="p-4 font-bold">{solicitud.cantidad} unidades</td>
                    <td className="p-4 text-gray-300">
                      {new Date(solicitud.fecha_solicitud).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        solicitud.estado === 'Aprobada' ? 'bg-green-900 text-green-300' :
                        solicitud.estado === 'Rechazada' ? 'bg-red-900 text-red-300' :
                        'bg-yellow-900 text-yellow-300'
                      }`}>
                        {solicitud.estado}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
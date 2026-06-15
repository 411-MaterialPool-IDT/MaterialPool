// src/app/catalogo/page.tsx
'use client';
import { useState, useEffect } from 'react';
import MaterialCard from '@/components/MaterialCard';
import { supabase } from '@/lib/supabase';
import type   { Material } from '@/types/material';

export default function Catalogo() {
  const [materiales, setMateriales] = useState<Material[]>([]);
  const [cargando, setCargando] = useState(true);

  const cargarMateriales = async () => {
    try {
      const { data, error } = await supabase.from('materiales').select('*');
      if (error) throw error;
      if (data) setMateriales(data);
    } catch (error) {
      console.error('Error cargando catálogo:', error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarMateriales();
  }, []);

  return (
    <main className="min-h-screen bg-[#0f172a] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-4">Catálogo de Materias Primas</h1>
        {cargando ? (
          <p className="text-gray-400 animate-pulse">Cargando inventario de talleres...</p>
        ) : materiales.length === 0 ? (
          <p className="text-gray-400">No hay materiales publicados en este momento.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {materiales.map((mat) => (
              <MaterialCard key={mat.id} material={mat} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
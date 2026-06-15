// src/app/talleres/[id]/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import MaterialCard from '@/components/MaterialCard';
import type { Material } from '@/types/material';

export default function TallerDetalle() {
  const { id } = useParams();
  const [materiales, setMateriales] = useState<Material[]>([]);

  useEffect(() => {
    const fetchMateriales = async () => {
      const { data } = await supabase.from('materiales').select('*').eq('taller_id', id);
      if (data) setMateriales(data);
    };
    fetchMateriales();
  }, [id]);

  return (
    <main className="min-h-screen bg-[#0f172a] text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Inventario del Taller</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {materiales.map((mat) => (
          <MaterialCard key={mat.id} material={mat} />
        ))}
      </div>
    </main>
  );
}
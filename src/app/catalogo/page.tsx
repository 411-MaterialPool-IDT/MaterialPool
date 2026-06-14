// src/app/catalogo/page.tsx
'use client';
import { useState, useEffect } from 'react';
import MaterialCard from '@/components/MaterialCard';

export default function Catalogo() {
  const [materiales, setMateriales] = useState<any[]>([]);

  // Fernando
  const cargarMateriales = async () => {
    console.log("Conexión a Supabase pendiente...");
    setMateriales([{ id: 1, nombre: 'Material de prueba' }]);
  };

  useEffect(() => {
    cargarMateriales();
  }, []);

  return (
    <main className="p-8">
      <h1>Catálogo de Materias Primas</h1>
      <div>
        {materiales.map((mat) => (
          <MaterialCard key={mat.id} material={mat} />
        ))}
      </div>
    </main>
  );
}
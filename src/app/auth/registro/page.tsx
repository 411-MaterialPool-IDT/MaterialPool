// src/app/auth/registro/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cargando, setCargando] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.includes('@') || password.length < 3) {
      alert('Por favor ingresa un correo válido y una contraseña.');
      return;
    }

    setCargando(true);

    setTimeout(() => {
      alert('Registro exitoso. Redirigiendo...');
      router.push('/auth/login');
    }, 1000);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0f172a]">
      <form onSubmit={handleRegister} className="bg-[#1e293b] p-8 rounded-lg w-96 border border-gray-700">
        <h2 className="text-white text-2xl font-bold mb-6">Registro de Taller</h2>
        <input 
          type="email" 
          placeholder="Correo" 
          className="w-full p-2 mb-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          className="w-full p-2 mb-6 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        <button 
          type="submit" 
          disabled={cargando}
          className="w-full bg-blue-600 text-white font-bold py-2 rounded mb-4 hover:bg-blue-500 transition-colors disabled:opacity-50"
        >
          {cargando ? 'Registrando...' : 'Registrar'}
        </button>

        <p className="text-sm text-gray-400 text-center border-t border-gray-600 pt-4">
          ¿Ya tienes cuenta? <Link href="/auth/login" className="text-blue-400 hover:underline">Inicia sesión</Link>
        </p>
      </form>
    </main>
  );
}
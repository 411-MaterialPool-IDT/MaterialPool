// src/app/auth/login/page.tsx
'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else alert('¡Inicio de sesión exitoso!');
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0f172a]">
      <form onSubmit={handleLogin} className="bg-[#1e293b] p-8 rounded-lg w-96 border border-gray-700">
        <h2 className="text-white text-2xl font-bold mb-6">Iniciar Sesión</h2>
        <input type="email" placeholder="Correo" className="w-full p-2 mb-4 bg-gray-800 text-white rounded" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" className="w-full p-2 mb-6 bg-gray-800 text-white rounded" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-2 rounded">Entrar</button>
      </form>
    </main>
  );
}
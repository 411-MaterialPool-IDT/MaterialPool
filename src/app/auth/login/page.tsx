// src/app/auth/login/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cargando, setCargando] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.includes('@') || password.length < 3) {
      alert('Por favor ingresa un correo válido y una contraseña.');
      return;
    }

    setCargando(true);

    setTimeout(() => {
      alert('¡Inicio de sesión exitoso!');
      router.push('/catalogo');
    }, 1000);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0f172a]">
      <form onSubmit={handleLogin} className="bg-[#1e293b] p-8 rounded-lg w-96 border border-gray-700">
        <h2 className="text-white text-2xl font-bold mb-6">Iniciar Sesión</h2>
        <input 
          type="email" 
          placeholder="Correo" 
          className="w-full p-2 mb-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          className="w-full p-2 mb-6 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        <button 
          type="submit" 
          disabled={cargando}
          className="w-full bg-yellow-500 text-black font-bold py-2 rounded mb-4 hover:bg-yellow-400 transition-colors disabled:opacity-50"
        >
          {cargando ? 'Conectando...' : 'Entrar'}
        </button>
        
        <p className="text-sm text-gray-400 text-center border-t border-gray-600 pt-4">
          ¿No tienes cuenta? <Link href="/auth/registro" className="text-yellow-500 hover:underline">Regístrate aquí</Link>
        </p>
      </form>
    </main>
  );
}
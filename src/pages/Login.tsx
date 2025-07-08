import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any; }; }) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const loginEndpoint = 'http://localhost:8081/user/login';
      await axios.post(loginEndpoint, form, {
        withCredentials: true, // importante para cookies de sesión
        headers: {
          'Content-Type': 'application/json',
        },
      });

      navigate('/assistant');
    } catch {
      setError('Email o contraseña incorrectos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Iniciar Sesión
        </h2>

        {error && (
          <p className="text-red-400 mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-white mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-white mb-1">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-400 text-gray-900 py-2 rounded-lg 
                       font-semibold transition-transform transform hover:-translate-y-0.5 disabled:opacity-50"
          >
            {loading ? 'Cargando...' : 'Entrar'}
          </button>
        </form>

        <p className="text-gray-300 mt-6 text-center">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-yellow-400 hover:underline">
            Regístrate
          </Link>
        </p>

        <p className="text-gray-400 text-sm mt-4 text-center">
          <Link to="/forgotpassword" className="hover:text-white">
            ¿Olvidaste tu contraseña?
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;

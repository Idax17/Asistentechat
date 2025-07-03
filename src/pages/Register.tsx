import { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any; }; }) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirm) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://localhost:8081/user/register', {
        Email: form.email,
        Username: form.name,
        Password: form.password
      });
      navigate('/login', { replace: true });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Error al registrar usuario');
      } else {
        setError('Error al registrar usuario');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <Header/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl text-white font-bold text-center mb-6">
          Crear Cuenta
        </h2>

        {error && (
          <p className="text-red-400 mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-white mb-1">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

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
                         focus:outline-none focus:ring-2 focus:ring-green-500"
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
                         focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="confirm" className="block text-white mb-1">
              Confirmar Contraseña
            </label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              required
              value={form.confirm}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-400 text-gray-900 py-2 rounded-lg 
                       font-semibold transition-transform transform hover:-translate-y-0.5 disabled:opacity-50"
          >
            {loading ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>

        <p className="text-gray-300 mt-6 text-center">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="text-yellow-400 hover:underline">
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Register;

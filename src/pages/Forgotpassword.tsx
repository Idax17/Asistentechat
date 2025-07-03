import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      await axios.post('/api/forgot-password', { email });
      setMessage('Revisa tu correo para restablecer tu contraseña');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al solicitar reset');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <Header/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl text-white font-bold text-center mb-6">
          Recuperar Contraseña
        </h2>

        {message && (
          <p className="text-green-300 mb-4 text-center">{message}</p>
        )}
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
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 py-2 rounded-lg 
                       font-semibold transition-transform transform hover:-translate-y-0.5 disabled:opacity-50"
          >
            {loading ? 'Enviando...' : 'Enviar enlace'}
          </button>
        </form>

        <p className="text-gray-300 mt-6 text-center">
          <Link to="/login" className="text-yellow-400 hover:underline">
            Volver a Iniciar Sesión
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default ForgotPassword;

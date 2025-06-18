import React, { useState } from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ShoppingCart } from 'lucide-react';

const LoginPage = () => {
  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(username, password);
      toast.success('Login successful!');
      navigate('/');
    } catch (err) {
      const msg = err.response?.data?.message || 'Login failed. Please try again.';
      setError(msg);
      toast.error(msg);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300">
      {/* App name + icon */}
      <div className="flex items-center gap-2 mb-6">
        <ShoppingCart className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-blue-600">Product Viewer</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl w-80">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">Log in to your account</h2>
        {error && <div className="text-red-500 mb-4 text-sm text-center">{error}</div>}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 transition text-white p-3 rounded-lg font-semibold shadow">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

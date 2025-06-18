import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';
import { ShoppingCart, Search, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';

const Header = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out!');
    navigate('/login');
  };


  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between p-4 gap-3">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <ShoppingCart className="w-6 h-6" /> Product Viewer
        </div>

        <div className="flex w-full sm:w-auto gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-3 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white transition shadow-sm"
              onChange={e => onSearch(e.target.value)}
            />
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-lg font-semibold shadow"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

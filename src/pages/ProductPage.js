import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Header from '../components/Header';
import { DollarSign, Star, ArrowDownUp } from 'lucide-react';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/products')
      .then(res => {
        setProducts(res.data.products);
        setDisplayed(res.data.products);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
    setDisplayed(filtered);
  };

  const handleSort = (field) => {
    const sorted = [...displayed].sort((a, b) => {
      if (typeof a[field] === 'string') {
        return a[field].localeCompare(b[field]);
      } else {
        return a[field] - b[field];
      }
    });
    setDisplayed(sorted);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center gap-2">
          <svg className="animate-spin h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          <p className="text-blue-600 font-medium animate-pulse">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center gap-3 my-4">
        <button className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 transition px-3 py-1 rounded-lg shadow-sm" onClick={() => handleSort('price')}>
          <ArrowDownUp className="w-4 h-4" /> Price
        </button>
        <button className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 transition px-3 py-1 rounded-lg shadow-sm" onClick={() => handleSort('rating')}>
          <ArrowDownUp className="w-4 h-4" /> Rating
        </button>
        <button className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 transition px-3 py-1 rounded-lg shadow-sm" onClick={() => handleSort('title')}>
          <ArrowDownUp className="w-4 h-4" /> Name
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
        {displayed.map(p => (
          <div key={p.id} className="bg-white border border-gray-200 p-4 rounded-xl shadow hover:shadow-lg transition">
            <img src={p.thumbnail} alt={p.title} className="h-48 w-full object-cover rounded-md mb-3" />
            <h3 className="font-semibold text-lg text-gray-800 truncate">{p.title}</h3>
            <div className="flex items-center gap-3 text-gray-600 text-sm mt-1">
              <span className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" /> ${p.price}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" /> {p.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import { isAuthenticated } from './services/authService';
import { Toaster } from 'react-hot-toast';

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const App = () => (
  <BrowserRouter>
    <Toaster
      position="bottom-center"
      reverseOrder={false}
      toastOptions={{
        style: {
          padding: '12px 16px',
          fontSize: '14px',
          borderRadius: '8px',
        },
      }}
    />
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <ProductPage />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;

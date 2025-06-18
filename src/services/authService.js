import axios from 'axios';

const USE_MOCK_LOGIN = true; // Set to true for mock login, false for DummyJSON

export const login = async (username, password) => {
  if (USE_MOCK_LOGIN) {
    // Mock login logic
    if (username === 'kminchelle' && password === '0lelplR') {
      const mockToken = 'mock-jwt-token';
      localStorage.setItem('token', mockToken);
      return { token: mockToken, user: { username } };
    } else {
      throw new Error('Invalid credentials (mock)');
    }
  } else {
    // Real DummyJSON login logic
    const res = await axios.post('https://dummyjson.com/auth/login', {
      username,
      password,
    });
    localStorage.setItem('token', res.data.token);
    return res.data;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

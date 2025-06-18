export const getToken = () => {
  return localStorage.getItem('token');
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const isTokenExpired = () => {
  const token = getToken();
  if (!token) return true;

  try {
    const payloadBase64 = token.split('.')[1];
    const payload = JSON.parse(atob(payloadBase64));
    if (!payload.exp) return false; // No exp claim → assume no expiry
    const expiryTime = payload.exp * 1000;
    return Date.now() > expiryTime;
  } catch (err) {
    console.error('Error decoding token', err);
    return true; // Assume expired if token is malformed
  }
};


# Product Viewer App

A React frontend that displays products using data from the DummyJSON API, with authentication, protected routes, search, sort, token handling, and a clean UI.

---

# Tech Stack

- React 18+
- React Router 6
- Tailwind CSS
- Axios
- Lucide React (icons)
- react-hot-toast (toast notifications)
- DummyJSON API (authentication + product data)

---

# Features

✅ Login using DummyJSON credentials  
✅ Store JWT token on successful login (in `localStorage`)  
✅ Protect product listing with private routes  
✅ Logout functionality with token clearing  
✅ Search products by title  
✅ Sort products by price, rating, or name  
✅ Token expiry check (bonus — checks if the JWT contains an `exp` claim)  
✅ **Mock login mode** for testing without relying on external API  

---

## How to run

### Clone / download the project  
If you have a ZIP:
```bash
unzip product-viewer.zip
cd product-viewer
```
Or clone:
```bash
git clone https://github.com/saeemwadkar/product-viewer.git
cd product-viewer
```

---

### Install dependencies
```bash
npm install
```

---

### Start the app
```bash
npm start
```
The app will open at `http://localhost:3000`

---

## Login credentials

### DummyJSON login (default)
Use these credentials:
```
Username: kminchelle
Password: 0lelplR
```
 The app will authenticate with:
```
https://dummyjson.com/auth/login
```

---

### Mock login (optional for testing)

If you want to test without API dependency:

1 Open:
```
src/services/authService.js
```
2️ Find:
```javascript
const USE_MOCK_LOGIN = false;
```
3️ Change it to:
```javascript
const USE_MOCK_LOGIN = true;
```
This will:
- Bypass API calls  
- Accept `kminchelle` / `0lelplR` as mock login  
- Return a fake token  

---

## Token expiry handling

- On each route access, the app checks if the stored token is expired (if it contains a valid `exp` claim).  
- If expired:
  - Token is cleared from `localStorage`
  - User is redirected to login
  - A toast appears: `Session expired. Please log in again.`  

_Note: DummyJSON tokens do not contain a real expiry (`exp`) field, but the logic is ready for real JWTs._

---

## Design notes

✅ Product page uses `bg-gray-100` to contrast with white product cards  
✅ Sort buttons have a light gray style with hover effects  
✅ Responsive grid layout for product cards  
✅ Consistent styling via Tailwind custom classes (see `index.css`)

---

## Project structure
```
src/
 ├── components/         # Reusable components (e.g., Header)
 ├── pages/              # Page-level components (LoginPage, ProductPage)
 ├── services/           # API, auth, token services
 ├── App.js
 ├── index.js
 ├── index.css           # Tailwind + custom styles
public/
package.json
tailwind.config.js
postcss.config.js
```

---

## How to test

✅ Try logging in with valid credentials  
✅ Try searching + sorting products  
✅ Try logging out  
✅ (If you want) Set `USE_MOCK_LOGIN = true` and test mock mode  
✅ (If you want) Corrupt the token in `localStorage` and reload to see expiry handling  

---

## Author

Saeem Wadkar

---

## Notes

- This project is ready to integrate with real JWT providers like Firebase/Auth0 if required.
- DummyJSON API may sometimes be unstable — use mock login if needed.

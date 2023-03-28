import { Routes, Route, Navigate } from 'react-router-dom';
import Catalog from './components/catalog/catalog';
import { Layout } from './components/layout/layout';
import { RequireAuth } from './hoc/requireAuth';
import AddressesPage from './pages/addressesPage';
import CartPage from './pages/cart/cartPage';
import HomePage from './pages/homePage/homePage';
import SecurityPage from './pages/security/securityPage';
import UserPage from './pages/userPage/userPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/" element={<Navigate replace to="/catalog" />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/addresses" element={<AddressesPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/user"
            element={
              <RequireAuth>
                <UserPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;

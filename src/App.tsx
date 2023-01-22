import { Routes, Route, Navigate } from 'react-router-dom';
import Catalog from './components/catalog/catalog';
import { Layout } from './components/layout';
import AddressesPage from './pages/addressesPage';
import BasketPage from './pages/basketPage';
import HomePage from './pages/homePage';
import SecurityPage from './pages/securityPage';

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
          <Route path="/basket" element={<BasketPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
